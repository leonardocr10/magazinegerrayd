// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PrismaStub = any;

function createUnavailableDatabaseClient(path = "prisma"): PrismaStub {
  return new Proxy(
    {},
    {
      get(_target, property) {
        const nextPath = `${path}.${String(property)}`;

        return new Proxy(() => {
          throw new Error(`Database client unavailable: ${nextPath}`);
        }, {
          get() {
            return createUnavailableDatabaseClient(nextPath);
          },
          apply() {
            throw new Error(`Database client unavailable: ${nextPath}`);
          },
        });
      },
    },
  ) as PrismaStub;
}

declare global {
  var prisma: PrismaStub | undefined;
}

export const prisma = global.prisma ?? createUnavailableDatabaseClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
