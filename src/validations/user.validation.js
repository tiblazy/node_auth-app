import z from 'zod';

const userModel = {
  minNameLength: 4,
  maxNameLength: 30,
  passwordRegex:
    // eslint-disable-next-line max-len, no-useless-escape
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?.,;'\[\]\\/-]).{6,}$/,
  minPasswordLength: 6,
  passwordRegexMessage:
    // eslint-disable-next-line max-len
    'Password must contain at least one lowercase letter, one uppercaseletter, and one special character',
};

const create = z
  .object({
    name: z
      .string()
      .min(
        userModel.minNameLength,
        `Name must be at least ${userModel.minNameLength} characters long`,
      )
      .max(
        userModel.maxNameLength,
        `Name must be at most ${userModel.maxNameLength} characters long`,
      ),
    email: z.string().email('Invalid email format').trim(),
    password: z
      .string()
      .min(
        userModel.minPasswordLength,
        `Password must be at least ${userModel.minPasswordLength} characters long`,
      )
      .regex(userModel.passwordRegex, userModel.passwordRegexMessage)
      .trim(),
  })
  .required();

const updatePassword = z
  .object({
    oldPassword: z
      .string()
      .min(
        userModel.minPasswordLength,
        `Password must be at least ${userModel.minPasswordLength} characters long`,
      )
      .regex(userModel.passwordRegex, userModel.passwordRegexMessage)
      .trim(),

    newPassword: z
      .string()
      .min(
        userModel.minPasswordLength,
        `Password must be at least ${userModel.minPasswordLength} characters long`,
      )
      .regex(userModel.passwordRegex, userModel.passwordRegexMessage)
      .trim(),

    confirmNewPassword: z
      .string()
      .min(
        userModel.minPasswordLength,
        `Password must be at least ${userModel.minPasswordLength} characters long`,
      )
      .regex(userModel.passwordRegex, userModel.passwordRegexMessage)
      .trim(),
  })
  .superRefine((data, ctx) => {
    const { oldPassword, newPassword, confirmNewPassword } = data;
    const code = 'superRefine';

    if (newPassword !== confirmNewPassword) {
      ctx.addIssue({
        path: ['confirmNewPassword'],
        code,
        message: 'New password and confirmation do not match',
      });
    }

    if (newPassword === oldPassword) {
      ctx.addIssue({
        path: ['newPassword'],
        code,
        message: 'New password must be different from the old password',
      });
    }
  });

const userSchema = {
  create,
  updatePassword,
};

export default userSchema;
