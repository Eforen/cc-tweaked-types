/** @noSelfInFile */
declare namespace parallel {
    /**
     * Switches between execution of the functions, until any of them finishes.
     * If any of the functions errors, the message is propagated upwards from the parallel.waitForAny call.
     * @param functions The functions this task will run.
     */
    function waitForAny(...functions: (() => void)[]): void

    /**
     * Switches between execution of the functions, until all of them are finished.
     * If any of the functions errors, the message is propagated upwards from the parallel.waitForAll call.
     * ______________________________________________________________________________________________________________
     * @param functions The functions this task will run.
     */
    function waitForAll(...functions: (() => void)[]): void
}
