require "rake"
require "json"
require "erb"


task :install do
	step "queryng and configure dot-files installation options"
	dot_mod, install_command, dotfiles_dir, dotfiles_map, packages_map = installation_setting 

	step "Switch to zsh if possible"
	switch_to_zsh

	step "Install beloved Fonts"
	install_fonts
	
	step "Install beloved Dependencies"
	if dot_mod == "extended"
		install_packages packages_map["minimal"], install_command
		install_packages packages_map["extended"], install_command
	end
	  install_packages packages_map["minimal"], install_command
	
	step "Uninstall/Backup config files"
	unlink_files dotfiles_map

	step "Installing config files"
	link_files dotfiles_map

	step "Setup vim"
	sh "nvim +PlugInstall +qall"

end


def installation_setting
	dot_mod = ENV["BATIE_DOT_MODE"]

	install_command = nil
	if OS.linux?
		install_command = "sudo apt-get install -y "
	end

	if OS.mac?
		install_command = "brew install -y "
	end

	dotfiles_dir = Dir.pwd
	dotfiles = dotfiles_dir + "/dotfiles.json"
	dotfiles_map = JSON.parse(File.read ( dotfiles ))
	dotfiles_map.inject(dotfiles_map) do | dotfiles_map , (key, value)|
		 dotfiles_map[key]=filemap(value)
		 dotfiles_map
	end
	packages = dotfiles_dir + "/dependencies.json"
	packages_map = JSON.parse( File.read ( packages ))

	return dot_mod.to_s, install_command.to_s, dotfiles_dir, dotfiles_map, packages_map
end

def switch_to_zsh
	if ENV["SHELL"] =~ /zsh/
		puts "using zsh"
	else
		print "switch to zsh?(recommended) [ynq]"
		case $stdin.gets.chomp
		when 'y'
			puts "switching to zsh"
			system %Q{chsh -s `which zsh`}
		when 'q'
			exit
		else
			puts "skipping zsh"
		end
	end
end

def install_fonts
	puts "installing fonts"
	system %Q{bash ~/dotfiles/fonts/install.sh}
end

def filemap(map)
  map.inject({}) do |map, (key, value)|
    map[File.expand_path( Dir.pwd + "/" + key)] = File.expand_path(value)
    map
  end
end

def link_file(original_filename, symlink_filename)
  original_path = File.expand_path(original_filename)
  symlink_path = File.expand_path(symlink_filename)
  if File.exists?(symlink_path) || File.symlink?(symlink_path)
    if File.symlink?(symlink_path)
      symlink_points_to_path = File.readlink(symlink_path)
      return if symlink_points_to_path == original_path
      # Symlinks can't just be moved like regular files. Recreate old one, and
      # remove it.
      ln_s symlink_points_to_path, get_backup_path(symlink_path), :verbose => true
      rm symlink_path
    else
      # Never move user's files without creating backups first
      mv symlink_path, get_backup_path(symlink_path), :verbose => true
    end
  end
  ln_s original_path, symlink_path, :verbose => true
end

def link_files ( file_map ) 
	file_map.each {
		| key, value |
		value.each {
			| origin, link |
			link_file origin, link
		}
	}
end

def get_backup_path(path)
  number=1
  backup_path="#{path}.bak"
  loop do
    if number > 1
      backup_path="#{backup_path}#{number}"
    end
    if File.exists?(backup_path) || File.symlink?(backup_path)
	number += 1
	next
    end
    break
  end
  backup_path
end

def unlink_file(original_filename, symlink_filename)
  original_path = File.expand_path(original_filename)
  symlink_path = File.expand_path(symlink_filename)
  if File.symlink?(symlink_path)
    symlink_points_to_path = File.readlink(symlink_path)
    if symlink_points_to_path == original_path
      # the symlink is installed, so we should uninstall it
      rm_f symlink_path, :verbose => true
      backups = Dir["#{symlink_path}*.bak"]
      case backups.size
      when 0
        # nothing to do
      when 1
        mv backups.first, symlink_path, :verbose => true
      else
        $stderr.puts "found #{backups.size} backups for #{symlink_path}, please restore the one you want."
      end
    else
      $stderr.puts "#{symlink_path} does not point to #{original_path}, skipping."
    end
  else
    $stderr.puts "#{symlink_path} is not a symlink, skipping."
  end
end

def unlink_files ( file_map ) 
	file_map.each {
		| key, value |
		value.each {
			| origin, link |
			unlink_file origin, link
		}
	}
end

module OS
  def OS.windows?
    (/cygwin|mswin|mingw|bccwin|wince|emx/ =~ RUBY_PLATFORM) != nil
  end

  def OS.mac?
   (/darwin/ =~ RUBY_PLATFORM) != nil
  end

  def OS.unix?
    !OS.windows?
  end

  def OS.linux?
    OS.unix? and not OS.mac?
  end
end


def step(description)
  description = "-- #{description} "
  description = description.ljust(80, '-')
  puts
  puts "\e[32m#{description}\e[0m"
end

def sh ( cmd )
cmd += " 2>&1 "
output = `#{cmd}`
return  output, $?.exitstatus == 0
end

def log ( message )
	File.open("log.log", 'w') { |file| 
		file.write( "\n ============================================" ) 
		file.write( message ) 
		file.write( "============================================" ) 
	}
end

def package_installed? ( name )
	ret = sh "dpkg-query -W -f='${Status} ${Version}\n' "  + name
	if ret.to_s.include?("installed") && !ret.to_s.include?("not")
		return true
	else
		return false
	end
end

def error ( message )
	puts "\e[31m#{message}\e[0m";
end

def install_packages( packages_map, install_command )

    packages_map.each {
	| key, value |
	step "Installing "+ key.to_s
	
	if package_installed? ( value.to_s )
		puts "package already installed \n";
	else
		output, status = sh install_command + value.to_s
		if status != 0
			message = "package: " + value.to_s + " Installation Error \n" + "See Log File \n"
			error message
			verbose_message = message + output.to_s
			log verbose_message
		end
	end
    }
end

