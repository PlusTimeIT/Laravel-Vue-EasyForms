/**
 *  Axios Return interface for server responses
 */
export interface HasAxiosReturn {
  /**
   * Data returned from the server call
   */
  data: any;
  /**
   * Message about the server call
   */
  message: string;
  /**
   * A quick check to whether the request was successful or not.
   */
  result: boolean;
  /**
   * Should the form loader be set to true or false
   */
  loader: boolean;
  /**
   * Should the page redirect somewhere after processing (can be added on failure and success)
   */
  redirect?: string;
}
