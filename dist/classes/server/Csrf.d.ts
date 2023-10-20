export declare class Csrf {
    protected allowed_attempts: number;
    protected attempts: number;
    protected last_attempt: Date;
    protected loading: boolean;
    protected retry_wait: number;
    protected token: boolean;
    endpoint: string;
    constructor(init?: Partial<Csrf>);
    attemptCheck(): boolean;
    failedAttempt(): Csrf;
    fetchNewToken(): Promise<boolean>;
    isValidCsrfToken(): boolean;
    resetAttempts(): Csrf;
    successfulAttempt(): Csrf;
    tokenAttempt(): Csrf;
}
//# sourceMappingURL=Csrf.d.ts.map