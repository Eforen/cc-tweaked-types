/** @noSelfInFile */
declare namespace fs {

    /**
     * Returns a list of files in a directory.
     * ______________________________________________________________________________________________________________
     * @param path string The path to list.
     * @return { string... } A table with a list of files in the directory.
     * @throws If the path doesn't exist.
     */
    function list(path: string): string[];

    /**
     * Returns whether the specified path exists.
     * ______________________________________________________________________________________________________________
     * @param path string The path to check the existence of.
     * @return boolean Whether the path exists.
     */
    function exists(path: string): boolean;


    /**
     * Returns whether a path is read-only.
     * ______________________________________________________________________________________________________________
     * @param path string The path to check.
     * @return boolean Whether the path cannot be written to.
     */
    function isReadOnly(path: string): boolean;

    /**
     * Creates a directory, and any missing parents, at the specified path.
     * ______________________________________________________________________________________________________________
     * @param path string The path to the directory to create.
     * @throws If the directory couldn't be created.
     */
    function makeDir(path: string): void;

    /**
     * Moves a file or directory from one path to another.
     *
     * Any parent directories are created as needed.
     * ______________________________________________________________________________________________________________
     * @param path string The current file or directory to move from.
     * @param dest string The destination path for the file or directory.
     * @throws If the file or directory couldn't be moved.
     */
    function move(path: string, dest: string): void;

    /**
     * Copies a file or directory to a new path.
     *
     * Any parent directories are created as needed.
     * ______________________________________________________________________________________________________________
     * @param path string The file or directory to copy.
     * @param dest string The path to the destination file or directory.
     * @throws If the file or directory couldn't be copied.
     */
    function copy(path: string, dest: string): void;

    /**
     * Opens a file for reading or writing at a path.
     *
     * The mode parameter can be r to read, w to write (deleting all contents), or a to append (keeping contents).
     * If b is added to the end, the file will be opened in binary mode; otherwise, it's opened in text mode.
     * ______________________________________________________________________________________________________________
     * @param path string The path to the file to open.
     * @param mode string The mode to open the file with.
     * @return FileHandle A file handle object for the file.
     * or
     * @tupleReturn
     * @return[1] nil If the file does not exist, or cannot be opened.
     * @return[2] string | nil A message explaining why the file cannot be opened.
     * @throws If an invalid mode was specified.
     */
    function open(path: string, mode: string): [FileHandle] | [null, string | null];

}

declare class FileHandle {
    /**
     * Read a line from the file.
     * ______________________________________________________________________________________________________________
     * @param withTrailing? boolean Whether to include the newline characters with the returned string. Defaults to false.
     * @return string | nil The read line or nil if at the end of the file.
     * @throws If the file has been closed.
     */
    readLine(withTrailing?: boolean): string | null;

    /**
     * Read the remainder of the file.
     * ______________________________________________________________________________________________________________
     * @return nil | string The remaining contents of the file, or nil if we are at the end.
     * @throws If the file has been closed.
     */
    readAll(): string | null;

    /**
     * Read a number of characters from this file.
     * ______________________________________________________________________________________________________________
     * @param count? number The number of characters to read, defaulting to 1.
     * @return string | nil The read characters, or nil if at the of the file.
     * @throws When trying to read a negative number of characters.
     * @throws If the file has been closed.
     */
    read(count: number): string | null;

    /**
     * Close this file, freeing any resources it uses.
     *
     * Once a file is closed it may no longer be read or written to.
     * ______________________________________________________________________________________________________________
     * @throws If the file has already been closed.
     */
    close(): void;

    /**
     * Write a string of characters to the file.
     * ______________________________________________________________________________________________________________
     * @param value The value to write to the file.
     * @throws If the file has been closed.
     */
    write(value: any): void;

    /**
     * Write a string of characters to the file, following them with a new line character.
     * ______________________________________________________________________________________________________________
     * @param  value The value to write to the file.
     * @throws If the file has been closed.
     */
    writeLine(value: any): void;

    /**
     * Save the current file without closing it.
     * ______________________________________________________________________________________________________________
     * @throws If the file has been closed.
     */
    flush(): void;

}

