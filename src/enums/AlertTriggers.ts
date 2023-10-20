export enum AlertTriggers {
  BeforeLoad = "before_load",
  AfterLoad = "after_load",
  FailedLoad = "failed_load",
  BeforeProcessing = "before_processing",
  AfterProcessing = "after_processing",
  FailedProcessing = "failed_processing",
  SuccessProcessing = "success_processing",
  Cancelled = "cancelled",
  FormReset = "form_reset",
}
