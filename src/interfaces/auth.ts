export interface AuthCredentials {
  email: string;
  password: string;
  device_name: string;
}

export interface AuthToken {
  plain_text_token: string;
}

export interface AuthUser {
  username: string;
  email: string;
  user_type: string;
  role: string;
  paternal_surname: string;
  maternal_surname: string;
  names: string;
  gender: string;
  phone?: string;
}

export interface AuthError {
  message: string;
  errors: Errors;
}

export interface Errors {
  email: string[];
}
