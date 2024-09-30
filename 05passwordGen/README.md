# Password Generator

This project allows users to generate a password of their chosen length, between 8 to 20 characters. Users can customize the password by including or excluding numbers and special characters. The password is dynamically updated whenever the length or options are changed, and users can copy the generated password.

## Features

- **Password Length**: Generate passwords with a length between 8 to 20 characters.
- **Customization**: Choose whether to include numbers and special characters in the password.
- **Dynamic Updates**: A new password is generated every time the user changes the password length or customization options.
- **Copy to Clipboard**: Users can easily copy the generated password to the clipboard.

## Hooks Used

- **useState**: To manage the state of password length, customization options, and the generated password.
- **useCallback**: To memoize the password generation logic for better performance.
- **useEffect**: To trigger password generation whenever the length or options are changed.
- **useRef**: To handle the copying of the password to the clipboard.

---

**Deployed:** <a href="https://react-05passwordgen.vercel.app/" target="_blank">`Click me to visit`</a>