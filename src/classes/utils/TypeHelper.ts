/**
 * Type Helper for checking variable types and emptiness
 */
export class TypeHelper {
  /**
   * Checks if a variable is an Array
   * @param o
   * @returns boolean
   */
  static isArray(o: any): boolean {
    return Array.isArray(o);
  }

  /**
   * Checks if Array is empty
   * @param o
   * @returns boolean
   */
  static isArrayEmpty(o: any[]): boolean {
    return o.length === 0;
  }

  /**
   * Checks if a variable is of type Boolean
   * @param o
   * @returns boolean
   */
  static isBoolean(o: any): boolean {
    return typeof o === "boolean";
  }

  /**
   * Checks variable type and if it is empty. All cases are checked:
   * Undefined, null, empty object, empty array, empty or blank string.
   * Throws errors on number, boolean and function types.
   * @param o
   * @returns boolean
   */
  // static isEmpty(o: any): boolean {
  //   // check if item is undefined first
  //   if (this.isUndefined(o)) {
  //     return true;
  //   } else if (this.isNull(o)) {
  //     return true;
  //   } else if (this.isArray(o)) {
  //     return this.isArrayEmpty(o);
  //   } else if (this.isObject(o)) {
  //     return this.isObjectEmpty(o);
  //   } else if (this.isString(o)) {
  //     return this.isStringEmpty(o);
  //   } else if (this.isNumber(o)) {
  //     // console.trace('Numbers can not be checked for emptiness - use isUndefined function instead. This cannot be trusted since we are only checking if the number is greater than 0')
  //     return o <= 0;
  //   } else if (this.isBoolean(o)) {
  //     // console.trace('Booleans can not be checked for emptiness - use isUndefined function instead.')
  //     return false;
  //   } else if (this.isFunction(o)) {
  //     // console.trace('Functions can not be checked for emptiness - use isUndefined function instead.')
  //     return false;
  //   }

  //   throw new Error("Unknown type detected on emptiness check - " + typeof o);
  // }

  static isEmpty(o: any): boolean {
    // simplified to help with overhead
    if (o === undefined || o === null) {
      return true;
    }

    if (Array.isArray(o)) {
      return o.length === 0;
    }

    if (typeof o === "object") {
      return Object.keys(o).length === 0 && o.constructor === Object;
    }

    if (typeof o === "string") {
      return !o.length;
    }

    if (typeof o === "number") {
      return o <= 0 || isNaN(o);
    }

    return false;
  }

  /**
   * Checks if a variable is type of File
   * @param o
   * @returns boolean
   */
  static isFile(o: any): boolean {
    return "File" in window && o instanceof File ? true : false;
  }

  /**
   * Checks if a variable is of type Function
   * @param o
   * @returns boolean
   */
  static isFunction(o: any): boolean {
    return typeof o === "function";
  }

  /**
   * Checks if a variable is Null
   * @param o
   * @returns boolean
   */
  static isNull(o: any): boolean {
    return o === null;
  }

  /**
   * Checks if a variable is of type Number
   * @param o
   * @returns boolean
   */
  static isNumber(o: any): boolean {
    return typeof o === "number" && !isNaN(o);
  }

  /**
   * Checks if a variable is of type Number
   * @param o
   * @returns boolean
   */
  static isNumeric(o: any): boolean {
    if (TypeHelper.isNumber(o)) {
      return true;
    }
    return typeof o === "string" && !isNaN(+o);
  }

  /**
   * Checks if a variable is of type Object
   * @param o
   * @returns boolean
   */
  static isObject(o: any): boolean {
    return typeof o === "object";
  }

  /**
   * Checks if Object is empty
   * @param o
   * @returns boolean
   */
  static isObjectEmpty(o: object): boolean {
    return Object.keys(o).length === 0 && o.constructor === Object;
  }

  /**
   * Checks if a variable is of type String
   * @param o
   * @returns boolean
   */
  static isString(o: any): boolean {
    return typeof o === "string";
  }

  /**
   * Checks if String is empty
   * @param o
   * @returns boolean
   */
  static isStringEmpty(o: string): boolean {
    return !o?.length;
  }

  /**
   * Checks if a variable is Undefined
   * @param o
   * @returns boolean
   */
  static isUndefined(o: any): boolean {
    return typeof o === "undefined";
  }
}
