declare class Handle {
    /**
     * Close this file handle, freeing any resources it uses.
     * ------------------------
     * @return[1] true If this handle was successfully closed.
     * @return[2] nil If this file handle could not be closed.
     * @return[2] string The reason it could not be closed.
     * @throws If this handle was already closed.
     */
    close(this: Handle): true | [ successfulClose: null, reason: string ]

    /**
     * Flush any buffered output, forcing it to be written to the file
     * _____________________
     * @throws If the handle has been closed
     */
    flush(this: Handle): true

    lines(this: Handle, ...args: any[]): LuaIterator<string>

    read(this: Handle, ...args: any[]): string | null

    /**
     * Sets and geionts the file position, measured from the beginning of the
     * file, to the posit given by offset plus a base specified by the string
     * whence, as follows:
     *
     * * "set": base is position 0 (beginning of the file);
     * * "cur": base is current position;
     * * "end": base is end of file;
     *
     * In case of success, seek returns the final file position, measured in bytes
     * from the beginning of the file. If seek fails, it returns nil, plus a
     * string describing the error.
     *
     * The default value for whence is "cur", and for offset is 0. Therefore, the
     * call file:seek() returns the current file position, without changing it;
     * the call file:seek("set") sets the position to the beginning of the file
     * (and returns 0); and the call file:seek("end") sets the position to the end
     * of the file, and returns its size.
     * @tupleReturn
     */
    seek(this: Handle, whence?: 'set' | 'cur' | 'end', offset?: number ): [number] | [undefined, string]

    /**
     * setvbuf does not seem to be implemented in ComputerCraft
     */
    setvbuf(this: Handle, mode: 'no' | 'full' | 'line', size?: number): void

    /**
     * Write one or more values to the file
     * ____________________________________
     * @param string|number ... The values to write.
     * @return[1] Handle The current file, allowing chained calls.
     * @return[2] nil If the file could not be written to.
     * @return[2] string The error message which occurred while writing.
     * @tupleReturn
     */
    write(self: Handle, ...args: (string | number)[]): [Handle] | [error: null, message: string]
}

/** @noSelfInFile */
/** @noSelf */
declare namespace io {

    /** A file handle representing the "standard input". Reading from this file will prompt the user for input. */
    const stdin: Handle

    /** A file handle representing the "standard output". Writing to this file will display the written text to the screen. */
    const stdout: Handle

    /** A file handle representing the "standard error" stream.
     * ________________________________________________________
     *
     * One may use this to display error messages, writing to it will display
     * them on the terminal. */
    const stderr: Handle

    /**
     * Closes the provided file handle.
     * ________________________________
     *
     * @param file The file handle to close, defaults to the
     * current output file.
     * 
     * @return[1] true If this handle was successfully closed.
     * @return[2] nil If this file handle could not be closed.
     * @return[2] string The reason it could not be closed.
     *
     * @see Handle:close
     * @see io.output
     * @tupleReturn
     */
    function close(file: Handle): [true] | [ successfulClose: null, reason: string ]


    /**
     * Flushes the current output file.
     * _____________________
     * @see Handle:flush
     * @see io.output
     */
    function flush(): void

    /**
     * Opens the given file name in read mode and returns an iterator that,
     * each time it is called, returns a new line from the file.
     *
     * This can be used in a for loop to iterate over all lines of a file:
     *
     * ```lua
     * for line in io.lines(filename) do print(line) end
     * ```
     *
     * Once the end of the file has been reached, @{nil} will be
     * returned. The file is automatically closed.
     *
     * If no file name is given, the @{io.input|current input} will be used
     * instead. In this case, the handle is not used.
     *
     * @param[opt] string filename The name of the file to extract lines from
     * @param ... The argument to pass to @{Handle:read} for each line.
     * @return function():string|nil The line iterator.
     * @throws If the file cannot be opened for reading
     *
     * @see Handle:lines
     * @see io.input
     */
    function lines(filename: string, ...readArgs: any[]): LuaIterator<string>

    /**
     * Open a file with the given mode, either returning a new file handle or `null`, plus an error message.
     * _____________________________________________________________________________________________________
     *
     * @param string filename The name of the file to open.
     * 
     * @param {string} mode The mode to open the file with. This defaults to `rb`.
     * 
     * The `mode` string can be any of the following:
     *  - **"r"**: Read mode
     *  - **"w"**: Write mode
     *  - **"a"**: Append mode
     *
     * The mode may also have a `b` at the end, which opens the file in "binary mode". 
     * This allows you to read binary files, as well as seek within a file.
     *
     * @return[1] Handle The opened file.
     * @return[2] nil In case of an error.
     * @return[2] string The reason the file could not be opened.
     * @tupleReturn
     */
    function open(filename: string, mode: 'r' | 'w' | 'a' | 'rb' | 'wb' | 'ab' | null): [file: Handle] | [file: null, error: string ]

    /**
     * Get or set the current output file.
     * ___________________________________
     *
     * @param {Handle|string} file The new output file, either as a file path or pre-existing handle.
     * @return Handle The current output file.
     * @throws If the provided filename cannot be opened for writing.
     */
    function output(file?: Handle | string): Handle

    /**
     * Read from the currently opened input file.
     * __________________________________________
     *
     * This is equivalent to `io.input():read(...)`. See @{Handle:read|the documentation} there for full details.
     *
     * @param {string} args The formats to read, defaulting to a whole line.
     * @return {string|null} The data read, or `null` if nothing can be read.
     */
    function read(...formats: string[]): string | null

    /**
     * Write to the currently opened output file.
     * __________________________________________
     *
     * This is equivalent to `io.output():write(...)`. See @{Handle:write|the documentation} there for full details.
     *
     * @param {string} args The strings to write
     */
    function write(...args: string[]): void

}