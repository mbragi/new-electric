 // Utility function to generate a random token with a specific format and spacing
export function generateFormattedToken(): string {
  const tokenLength = 16; // The desired token length without spaces
  const token = Array.from({ length: tokenLength }, () =>
    Math.floor(Math.random() * 10).toString()
  ).join('');

  // Add the spaces to the token and return it
  return `${token.slice(0, 4)} ${token.slice(4, 8)} ${token.slice(8, 12)} ${token.slice(12)}`;
}