/*
Functions in the global environment, defined in `bios.lua`. This does not
include standard Lua functions.
*/

/** @noSelfInFile */
// declare global {
    
    /**
     * Pauses execution for the specified number of seconds.
     * 
     * --------------------------------------------------
     * 
     * As it waits for a fixed amount of world ticks, `time` will automatically be
     * rounded up to the nearest multiple of 0.05 seconds. If you are using coroutines
     * or the @{parallel|parallel API}, it will only pause execution of the current
     * thread, not the whole program.
     * 
     * ***Note** Because sleep internally uses timers, it is a function that yields.
     * This means that you can use it to prevent "Too long without yielding" errors,
     * however, as the minimum sleep time is 0.05 seconds, it will slow your program
     * down.
     * 
     * ***Warning** Internally, this function queues and waits for a timer event (using
     * {@link os.startTimer}), however it does not listen for any other events. This means
     * that any event that occurs while sleeping will be entirely discarded. If you
     * need to receive events while sleeping, consider using {@link os.startTimer|timers},
     * or the {@link parallel|parallel API}.
     * 
     * @param time The number of seconds to sleep for, rounded up to the
     * nearest multiple of 0.05.
     * 
     * @see os.startTimer
     * @usage Sleep for three seconds.
     * 
     * ```
     *     print("Sleeping for three seconds")
     *     sleep(3)
     *     print("Done!")
     * ```
     */
    declare function sleep(time:number): void

    /**
    --- Writes a line of text to the screen without a newline at the end, wrapping
    -- text if necessary.
    --
    -- @param text The text to write to the string
    -- @return {number} The number of lines written
    -- @see print A wrapper around write that adds a newline and accepts multiple arguments
    -- @usage write("Hello, world")
    */
    declare function write(text:string): void

    /**
    --- Prints the specified values to the screen separated by spaces, wrapping if
    -- necessary. After printing, the cursor is moved to the next line.
    --
    -- @param ... The values to print on the screen
    -- @return {number} The number of lines written
    -- @usage print("Hello, world!")
    */
    declare function print(...args: any[]): void

    /**
    --- Prints the specified values to the screen in red, separated by spaces,
    -- wrapping if necessary. After printing, the cursor is moved to the next line.
    --
    -- @param ... The values to print on the screen
    -- @usage printError("Something went wrong!")
    */
    declare function printError(...args: any[]): void

    /**
    --[[- Reads user input from the terminal, automatically handling arrow keys,
    pasting, character replacement, history scrollback, auto-completion, and
    default values.

    @paramopt] string replaceChar A character to replace each typed character with.
    This can be used for hiding passwords, for example.
    @paramopt] table history A table holding history items that can be scrolled
    back to with the up/down arrow keys. The oldest item is at index 1, while the
    newest item is at the highest index.
    @paramopt] function(partial: string):({ string... }|nil) completeFn A function
    to be used for completion. This function should take the partial text typed so
    far, and returns a list of possible completion options.
    @paramopt] string default Default text which should already be entered into
    the prompt.

    @return string The text typed in.

    @see cc.completion For functions to help with completion.
    @usage Read an string and echo it back to the user

        write("> ")
        local msg = read()
        print(msg)

    @usage Prompt a user for a password.

        while true do
        write("Password> ")
        local pwd = read("*")
        if pwd == "let me in" then break end
        print("Incorrect password, try again.")
        end
        print("Logged in!")

    @usage A complete example with completion, history and a default value.

        local completion = require "cc.completion"
        local history = { "potato", "orange", "apple" }
        local choices = { "apple", "orange", "banana", "strawberry" }
        write("> ")
        local msg = read(nil, history, function(text) return completion.choice(text, choices) end, "app")
        print(msg)
    ]]
    */
    declare function read(replaceChar:any, history:any, completeFn:any, defaultValue: string): void

    /**
    --- The ComputerCraft and Minecraft version of the current computer environment.
    --
    -- For example, `ComputerCraft 1.93.0 (Minecraft 1.15.2)`.
    -- @usage _HOST
    */
    declare const _HOST: string

    /**
    --[[- The default computer settings as defined in the ComputerCraft
    configuration.

    This is a comma-separated list of settings pairs defined by the mod
    configuration or server owner. By default, it is empty.

    An example value to disable autocompletion:

        shell.autocomplete=false,lua.autocomplete=false,edit.autocomplete=false

    @usage _CC_DEFAULT_SETTINGS
    ]]
    */
    declare const _CC_DEFAULT_SETTINGS: string

// }