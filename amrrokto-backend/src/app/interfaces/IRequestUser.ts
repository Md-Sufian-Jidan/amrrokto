import { Role } from "../../generated/prisma/enums";

interface IRequestUser {
    userId: string;
    email: string;
    role: Role;
}

export default IRequestUser;