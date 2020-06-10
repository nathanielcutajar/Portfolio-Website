module.exports = function (grunt) {

    grunt.initConfig({
        sass: {
            dev: {
                files: {
                    'css/main.css': 'css/main.scss'
                }
            }
        },
        cssmin: {
            build: {
                src: 'css/main.css',
                dest: 'css/main.min.css'
            }
        },
        uglify: {
            build: {
                files: {
                    'js/custom-js.min.js': ['js/custom-js.js']
                }
            }
        },
        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 3,
                success: false,
                duration: 3
            }
        },
        image: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'dist/'
                }]
            }
        },
        watch: {
            sass: {
                files: 'css/*.scss',
                tasks: ['css']
            },
            uglify: {
                files: 'js/custom-js.js',
                tasks: ['uglify']
            }
        }

    });

    grunt.registerTask('default', ['css', 'js']);
    grunt.registerTask('css', ['sass', 'cssmin']);
    grunt.registerTask('js', ['uglify']);

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-image');

    grunt.task.run('notify_hooks');
};