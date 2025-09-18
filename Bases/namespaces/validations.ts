
namespace Validations {
  /**
   * Validates if the input is a non-empty string.
   * @param input - The string to validate.
   * @returns True if the input is a non-empty string, otherwise false.
   */
  export function isNonEmptyString(input: any): boolean {
    return typeof input === 'string' && input.trim().length > 0;
  }

  /**
   * Validates if the input is a valid email address.
   * @param email - The email address to validate.
   * @returns True if the email is valid, otherwise false.
   */
  export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}