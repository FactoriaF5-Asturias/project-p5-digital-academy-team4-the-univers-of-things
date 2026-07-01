export const authService = {
  login(email, password) {
    if (email === "test@test.com" && password === "123456") {
      return {
        success: true,
        token: "fake-admin-token",
        user: {
          email,
          role: "admin",
        },
      };
    }

    const savedUserPassword = localStorage.getItem("userPassword") || "123456";

    if (email === "user@test.com" && password === savedUserPassword) {
      return {
        success: true,
        token: "fake-user-token",
        user: {
          email,
          role: "customer",
        },
      };
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const registeredUser = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (registeredUser) {
      return {
        success: true,
        token: "fake-user-token",
        user: {
          name: registeredUser.name,
          email: registeredUser.email,
          role: "customer",
        },
      };
    }

    return {
      success: false,
      message: "Invalid email or password.",
    };
  },

  register(name, email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const existingUser = users.find((user) => user.email === email);

    if (
      existingUser ||
      email === "test@test.com" ||
      email === "user@test.com"
    ) {
      return {
        success: false,
        message: "Este email ya está registrado.",
      };
    }

    const newUser = {
      name,
      email,
      password,
      role: "customer",
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    return {
      success: true,
      message: "Cuenta creada correctamente.",
    };
  },
};
