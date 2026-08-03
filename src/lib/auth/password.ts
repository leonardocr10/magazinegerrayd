import { compare, hash } from "bcryptjs";

export async function hashPassword(value: string) {
  return hash(value, 10);
}

export async function verifyPassword(value: string, hashedValue: string) {
  return compare(value, hashedValue);
}
