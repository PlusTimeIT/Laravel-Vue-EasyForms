/**
 * Csrf Class for handling csrf token calls
 */
export declare class Csrf {
    allowed_attempts: number;
    default_wait_time: number;
    attempts: number;
    last_attempt: Date;
    protected loading: boolean;
    retry_wait: number;
    protected token: boolean;
    protected prefix: string | undefined;
    error_message: string;
    endpoint: string;
    constructor(init?: Partial<Csrf>);
    attemptCheck(): boolean;
    failedAttempt(): void;
    delay(milliseconds: number): Promise<unknown>;
    fetchNewToken(): Promise<boolean>;
    isValidCsrfToken(): boolean;
    resetAttempts(): void;
    isLoading(): boolean;
    successfulAttempt(prefix: string): Promise<boolean>;
    tokenAttempt(): Promise<boolean>;
}
//# sourceMappingURL=Csrf.d.ts.map