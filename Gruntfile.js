/**
 * Created by rfan on 15/05/15.
 */
module.exports = function (grunt) {
    'use strict';

    var BasePath = './';

    var TypscriptSourceDirs = [
        BasePath + "app/**/*.ts"
    ];


    // var LintDirs = [
    //     BasePath + "Src/**/*.js"
    // ];


    var Directives = [
        // BasePath + "Src/Modules/Chat/Directives/*.js",
        // BasePath + "Src/Modules/Checkin/Directives/*.js",
        // BasePath + "Src/Modules/Comments/Directives/*.js",
        // BasePath + "Src/Modules/Competitions/Directives/*.js",
        // BasePath + "Src/Modules/Polls/Directives/*.js",
        // BasePath + "Src/Modules/Reactions/Directives/*.js",
        // BasePath + "Src/Modules/RedButton/Directives/*.js",
        // BasePath + "Src/Modules/ContentFeed/Directives/*.js",
        // BasePath + "Src/Modules/ProfileMin/Directives/*.js",
        // BasePath + "Src/Modules/Login/Directives/*.js"
    ]

    // Project configuration.
    grunt.initConfig({

        // jshint: {
        //     all: LintDirs,
        //     options: {
        //         node: true,
        //         smarttabs: true,
        //         shadow: true,
        //         sub: true,
        //         evil: true,
        //         force: true
        //     }
        // },
        ts: {
            // A specific target
            build: {
                src: TypscriptSourceDirs,
                // The source html files, https://github.com/grunt-ts/grunt-ts#html-2-typescript-support
                //html: ["test/work/**/*.tpl.html"],
                // If specified, generate this file that to can use for reference management
                reference: BasePath + "Libraries/ReferencesModules.d.ts",
                // If specified, generate an out.js file which is the merged js file
                //out: 'test/out.js',
                // If specified, the generate JavaScript files are placed here. Only works if out is not specified
                //outDir: BasePath,
                // If specified, watches this directory for changes, and re-runs the current target
                //watch: 'test',
                // Use to override the default options, http://gruntjs.com/configuring-tasks#options
                options: {
                    // 'es3' (default) | 'es5'
                    target: 'es5',
                    // true (default) | false
                    sourceMap: false,
                    // true | false (default)
                    declaration: false,

                    comments: true
                }
            }
        },
        ngdocs: {
            options: {
                dest: 'docs',
                title: "Joiz Plugins/Directive documentation.",
                html5Mode: false,
                scripts: [
                    'node_modules/grunt-ngdocs/src/templates/js/angular.min.js'
                ]
            },
            // api: {
            //     src: Directives,
            //     title: 'Joiz Plugins/Directive documentation.'
            // }
        },

        connect: {
            options: {
                keepalive: true,
                hostname: '0.0.0.0',
                port: '8080',
                debug: true
            },
            server: {}
        },
        clean: ['docs'],

        watch: {
            scripts: {
                files: TypscriptSourceDirs,
                options: {
                // tasks: ['ts:build', 'jshint', 'ngdocs'],
                tasks: ['ts:build'],
                    interrupt: true
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task.
    grunt.registerTask('default', ['ts:build', 'clean', 'ngdocs']);
};
