/** @noSelfInFile */

/** @noSelf */
declare class Shell {
    /**
     * Run a program with the supplied arguments.
     * ________________________
     *
     * Unlike @{shell.run}, each argument is passed to the program verbatim. While
     * `shell.run("echo", "b c")` runs `echo` with `b` and `c`,
     * `shell.execute("echo", "b c")` runs `echo` with a single argument `b c`.
     *
     * @param command The program to execute.
     * @param args Arguments to this program.
     * @return boolean Whether the program exited successfully.
     * @usage Run `paint my-image` from within your program:
     * ```ts
     *     shell.execute("paint", "my-image")
     * ```
     * @param command 
     * @param */ 
    execute(command: string, ...args: string[]): boolean

    /**
     * Run a program with the supplied arguments.
     * ________________________
     *
     * All arguments are concatenated together and then parsed as a command line. As
     * a result, `shell.run("program a b")` is the same as `shell.run("program",
     * "a", "b")`.
     *
     * @param args The program to run and its arguments.
     * @return boolean Whether the program exited successfully.
     * @usage Run `paint my-image` from within your program:
     * ```ts
     *     shell.run("paint", "my-image")
     * ```
     * @see shell.execute Run a program directly without parsing the arguments.
     */
    run(...args: string[]): boolean

    /**
     * Exit the current shell.
     * ________________________
     *
     * This does _not_ terminate your program, it simply makes the shell terminate
     * after your program has finished. If this is the toplevel shell, then the
     * computer will be shutdown.
     */
    exit(): void

    /**
     * Return the current working directory.
     * ________________________________________________
     * This is what is displayed before the `> ` of the shell prompt, and is used by @{shell.resolve} to handle relative paths.
     *
     * @return string The current working directory.
     * @see setDir To change the working directory.
     */
    dir(): string

    /**
     * Set the current working directory.
     * ________________________________________
     *
     * @param dir The new working directory.
     * @throws If the path does not exist or is not a directory.
     * @usage Set the working directory to "rom"
     * ```ts
     *     shell.setDir("rom")
     * ```
     */
    setDir(dir: string): void

    /**
     * Set the path where programs are located.
     * __________________________________________
     *
     * The path is composed of a list of directory names in a string, each separated
     * by a colon (`:`). On normal turtles will look in the current directory (`.`),
     * `/rom/programs` and `/rom/programs/turtle` folder, making the path
     * `.:/rom/programs:/rom/programs/turtle`.
     *
     * @return string The current shell's path.
     * @see setPath To change the current path.
     */
    path(): string

    /**
     * Set the @{path|current program path}.
     * _________________________________
     * Be careful to prefix directories with a `/`. Otherwise they will be searched
     * for from the @{shell.dir|current directory}, rather than the computer's root.
     *
     * @param path The new program path.
     */
    setPath(path: string): void

    /**
     * Resolve a relative path to an absolute path.
     * ________________________
     * The {@link fs} and {@link io} APIs work using absolute paths, and so we must convert
     * any paths relative to the {@link dir|current directory} to absolute ones. This
     * does nothing when the path starts with `/`.
     *
     * @param path The path to resolve.
     * @usage Resolve `startup.lua` when in the `rom` folder.
     * ```ts
     *    shell.setDir("rom")
     *    print(shell.resolve("startup.lua"))
     *    => rom/startup.lua
     * ```
     */
    resolve(path: string):void

    /**
     * Resolve a program, using the @{path|program path} and list of @{aliases|aliases}.
     * ________________________
     * @param command The name of the program
     * @return string|nil The absolute path to the program, or @{nil} if it could
     * not be found.
     * @usage Locate the `hello` program.
     * ```ts
     *     shell.resolveProgram("hello")
     *     => rom/programs/fun/hello.lua
     * ```
     */
    resolveProgram(command: string) : string | null

    /**
     * Return a list of all programs on the @{shell.path|path}.
     * _________________________________
     * @param include_hidden Include hidden files. Namely, any which start with `.`.
     * @return { string } A list of available programs.
     * @usage ```ts
     * textutils.tabulate(shell.programs())
     * ```
     */
    programs(include_hidden?: boolean): string
    
    /**
     * Complete a shell command line.
     * ________________________________________________
     * This accepts an incomplete command, and completes the program name or
     * arguments. For instance, `l` will be completed to `ls`, and `ls ro` will be
     * completed to `ls rom/`.
     *
     * Completion handlers for your program may be registered with
     * @{shell.setCompletionFunction}.
     *
     * @param sLine The input to complete.
     * @return { string }|nil The list of possible completions.
     * @see _G.read For more information about completion.
     * @see shell.completeProgram
     * @see shell.setCompletionFunction
     * @see shell.getCompletionInfo
     */
    complete(sLine: string): string[] | null

    /**
     * Complete the name of a program.
     *
     * @param program The name of a program to complete.
     * @return { string } A list of possible completions.
     * @see cc.shell.completion.program
     */
    completeProgram(program: string): string[]

    /**
     * Set the completion function for a program.
     * __________________________________________
     * When the program is entered on the command line, this program will be called to provide auto-complete information.
     *
     * The completion function accepts four arguments:
     *
     *  1. The current shell. As completion functions are inherited, this is not
     *     guaranteed to be the shell you registered this function in.
     *  2. The index of the argument currently being completed.
     *  3. The current argument. This may be the empty string.
     *  4. A list of the previous arguments.
     *
     * For instance, when completing `pastebin put rom/st` our pastebin completion
     * function will receive the shell API, an index of 2, `rom/st` as the current
     * argument, and a "previous" table of `{ "put" }`. This function may then wish
     * to return a table containing `artup.lua`, indicating the entire command
     * should be completed to `pastebin put rom/startup.lua`.
     *
     * You completion entries may also be followed by a space, if you wish to
     * indicate another argument is expected.
     *
     * @param program The path to the program. This should be an absolute path _without_ the leading `/`.
     * @param complete The completion function.
     * @see cc.shell.completion Various utilities to help with writing completion functions.
     * @see shell.complete
     * @see _G.read For more information about completion.
     */
    setCompletionFunction(program: string, complete: CompletionFunction): void
    
    /**
     * Get a table containing all completion functions.
     * ________________________________________________
     *
     * This should only be needed when building custom shells. Use @{setCompletionFunction} to add a completion function.
     *
     * @return A table mapping the absolute path of programs, to their completion functions.
     */
    getCompletionInfo(): { [path: string]: CompletionFunction }

    /**
     * Returns the path to the currently running program.
     * __________________________________________________
     * @return string The absolute path to the running program.
     */
    getRunningProgram(): string

    /**
     * Add an alias for a program.
     * ___________________________
     *
     * @param command The name of the alias to add.
     * @param program The name or path to the program.
     * @usage Alias `vim` to the `edit` program
     * ```ts
     *     shell.setAlias("vim", "edit")
     * ```
     */
    setAlias(command: string, program: string): void

    /**
     * Remove an alias.
     * ________________
     * @param command The alias name to remove.
     */
    clearAlias(command: string): void

    /**
     * Get the current aliases for this shell.
     * _______________________________________
     *
     * Aliases are used to allow multiple commands to refer to a single program. For
     * instance, the `list` program is aliased `dir` or `ls`. Running `ls`, `dir` or
     * `list` in the shell will all run the `list` program.
     *
     * @return A table, where the keys are the names of
     * aliases, and the values are the path to the program.
     * @see shell.setAlias
     * @see shell.resolveProgram This uses aliases when resolving a program name to
     * an absolute path.
     */
    aliases(): { [name: string]: string }

    /**
     * Open a new @{multishell} tab running a command.
     * _______________________________________________
     * This behaves similarly to @{shell.run}, but instead returns the process
     * index.
     *
     * This function is only available if the @{multishell} API is.
     *
     * @param args The command line to run.
     * @see shell.run
     * @see multishell.launch
     * @usage Launch the Lua interpreter and switch to it.
     * ```ts
     *     let id = shell.openTab("lua")
     *     shell.switchTab(id)
     * ```
     */
    openTab(...args: string[]): void

    /**
     * Switch to the @{multishell} tab with the given index.
     *
     * @param id The tab to switch to.
     * @see multishell.setFocus
     */
    switchTab(id: number): void
}

type CompletionFunction = (shell: Shell, index: number, argument: string, previous: string[]) =>  string[] | null

declare const shell: Shell