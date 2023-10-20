export declare class Csrf {
    endpoint: string;
    protected attempts: number;
    protected last_attempt: Date;
    protected loading: boolean;
    protected token: boolean;
    protected retry_wait: number;
    protected allowed_attempts: number;
    constructor(init?: Partial<Csrf>);
    attemptCheck(): boolean;
    fetchNewToken(): Promise<boolean>;
    isValidCsrfToken(): boolean;
    resetAttempts(): Csrf;
    failedAttempt(): Csrf;
    successfulAttempt(): Csrf;
    tokenAttempt(): Csrf;
}
//# sourceMappingURL=Csrf.d.ts.map