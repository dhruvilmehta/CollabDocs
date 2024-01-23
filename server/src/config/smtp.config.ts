import { createTransport } from "nodemailer";

const transporter=createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth:{
        user: "dhruvilmehta2606@gmail.com",
        pass: "fhncoqdytgydhcis"
    },
    secure: true
})

export default transporter