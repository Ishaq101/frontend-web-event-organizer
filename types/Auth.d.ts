interface IRegister {
    fullName: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface IActivation {
    code: string;
}

interface SessionExtended extends Session {
  accessToken?: string;
}

export type { IRegister, IActivation, SessionExtended };