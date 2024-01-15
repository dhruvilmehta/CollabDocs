const userNotFound: Array<ResponseMessage>=[
    {
        msg: "Your email or password is incorrect"
    }
]

const emailNotVerified: Array<ResponseMessage>=[
    {
        msg: "Please verify your email before logging in"
    }
]

const resetPassword: Array<ResponseMessage>=[
    {
        msg: "If a user with that email exists, you will receive an email with instructions to reset password"
    }
]

export {userNotFound, emailNotVerified, resetPassword}