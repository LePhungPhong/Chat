
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model ConversationMember
 * 
 */
export type ConversationMember = $Result.DefaultSelection<Prisma.$ConversationMemberPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Attachment
 * 
 */
export type Attachment = $Result.DefaultSelection<Prisma.$AttachmentPayload>
/**
 * Model TypingStatus
 * 
 */
export type TypingStatus = $Result.DefaultSelection<Prisma.$TypingStatusPayload>
/**
 * Model ReadReceipt
 * 
 */
export type ReadReceipt = $Result.DefaultSelection<Prisma.$ReadReceiptPayload>
/**
 * Model VideoCallRoom
 * 
 */
export type VideoCallRoom = $Result.DefaultSelection<Prisma.$VideoCallRoomPayload>
/**
 * Model VideoCallParticipant
 * 
 */
export type VideoCallParticipant = $Result.DefaultSelection<Prisma.$VideoCallParticipantPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MessageStatus: {
  show: 'show',
  recall: 'recall',
  delete: 'delete',
  sent: 'sent'
};

export type MessageStatus = (typeof MessageStatus)[keyof typeof MessageStatus]


export const MessageType: {
  text: 'text',
  file: 'file'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]


export const FileType: {
  image: 'image',
  video: 'video',
  file: 'file',
  audio: 'audio'
};

export type FileType = (typeof FileType)[keyof typeof FileType]

}

export type MessageStatus = $Enums.MessageStatus

export const MessageStatus: typeof $Enums.MessageStatus

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

export type FileType = $Enums.FileType

export const FileType: typeof $Enums.FileType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversationMember`: Exposes CRUD operations for the **ConversationMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConversationMembers
    * const conversationMembers = await prisma.conversationMember.findMany()
    * ```
    */
  get conversationMember(): Prisma.ConversationMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attachment`: Exposes CRUD operations for the **Attachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachment.findMany()
    * ```
    */
  get attachment(): Prisma.AttachmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.typingStatus`: Exposes CRUD operations for the **TypingStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TypingStatuses
    * const typingStatuses = await prisma.typingStatus.findMany()
    * ```
    */
  get typingStatus(): Prisma.TypingStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.readReceipt`: Exposes CRUD operations for the **ReadReceipt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReadReceipts
    * const readReceipts = await prisma.readReceipt.findMany()
    * ```
    */
  get readReceipt(): Prisma.ReadReceiptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoCallRoom`: Exposes CRUD operations for the **VideoCallRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoCallRooms
    * const videoCallRooms = await prisma.videoCallRoom.findMany()
    * ```
    */
  get videoCallRoom(): Prisma.VideoCallRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoCallParticipant`: Exposes CRUD operations for the **VideoCallParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoCallParticipants
    * const videoCallParticipants = await prisma.videoCallParticipant.findMany()
    * ```
    */
  get videoCallParticipant(): Prisma.VideoCallParticipantDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Conversation: 'Conversation',
    ConversationMember: 'ConversationMember',
    Message: 'Message',
    Attachment: 'Attachment',
    TypingStatus: 'TypingStatus',
    ReadReceipt: 'ReadReceipt',
    VideoCallRoom: 'VideoCallRoom',
    VideoCallParticipant: 'VideoCallParticipant'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "conversation" | "conversationMember" | "message" | "attachment" | "typingStatus" | "readReceipt" | "videoCallRoom" | "videoCallParticipant"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      ConversationMember: {
        payload: Prisma.$ConversationMemberPayload<ExtArgs>
        fields: Prisma.ConversationMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload>
          }
          findFirst: {
            args: Prisma.ConversationMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload>
          }
          findMany: {
            args: Prisma.ConversationMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload>[]
          }
          create: {
            args: Prisma.ConversationMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload>
          }
          createMany: {
            args: Prisma.ConversationMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload>[]
          }
          delete: {
            args: Prisma.ConversationMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload>
          }
          update: {
            args: Prisma.ConversationMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload>
          }
          deleteMany: {
            args: Prisma.ConversationMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload>[]
          }
          upsert: {
            args: Prisma.ConversationMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMemberPayload>
          }
          aggregate: {
            args: Prisma.ConversationMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversationMember>
          }
          groupBy: {
            args: Prisma.ConversationMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationMemberCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Attachment: {
        payload: Prisma.$AttachmentPayload<ExtArgs>
        fields: Prisma.AttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findFirst: {
            args: Prisma.AttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findMany: {
            args: Prisma.AttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          create: {
            args: Prisma.AttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          createMany: {
            args: Prisma.AttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          delete: {
            args: Prisma.AttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          update: {
            args: Prisma.AttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          upsert: {
            args: Prisma.AttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          aggregate: {
            args: Prisma.AttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachment>
          }
          groupBy: {
            args: Prisma.AttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentCountAggregateOutputType> | number
          }
        }
      }
      TypingStatus: {
        payload: Prisma.$TypingStatusPayload<ExtArgs>
        fields: Prisma.TypingStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypingStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypingStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypingStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypingStatusPayload>
          }
          findFirst: {
            args: Prisma.TypingStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypingStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypingStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypingStatusPayload>
          }
          findMany: {
            args: Prisma.TypingStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypingStatusPayload>[]
          }
          create: {
            args: Prisma.TypingStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypingStatusPayload>
          }
          createMany: {
            args: Prisma.TypingStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TypingStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypingStatusPayload>[]
          }
          delete: {
            args: Prisma.TypingStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypingStatusPayload>
          }
          update: {
            args: Prisma.TypingStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypingStatusPayload>
          }
          deleteMany: {
            args: Prisma.TypingStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypingStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TypingStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypingStatusPayload>[]
          }
          upsert: {
            args: Prisma.TypingStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypingStatusPayload>
          }
          aggregate: {
            args: Prisma.TypingStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTypingStatus>
          }
          groupBy: {
            args: Prisma.TypingStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypingStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypingStatusCountArgs<ExtArgs>
            result: $Utils.Optional<TypingStatusCountAggregateOutputType> | number
          }
        }
      }
      ReadReceipt: {
        payload: Prisma.$ReadReceiptPayload<ExtArgs>
        fields: Prisma.ReadReceiptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReadReceiptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadReceiptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReadReceiptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadReceiptPayload>
          }
          findFirst: {
            args: Prisma.ReadReceiptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadReceiptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReadReceiptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadReceiptPayload>
          }
          findMany: {
            args: Prisma.ReadReceiptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadReceiptPayload>[]
          }
          create: {
            args: Prisma.ReadReceiptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadReceiptPayload>
          }
          createMany: {
            args: Prisma.ReadReceiptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReadReceiptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadReceiptPayload>[]
          }
          delete: {
            args: Prisma.ReadReceiptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadReceiptPayload>
          }
          update: {
            args: Prisma.ReadReceiptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadReceiptPayload>
          }
          deleteMany: {
            args: Prisma.ReadReceiptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReadReceiptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReadReceiptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadReceiptPayload>[]
          }
          upsert: {
            args: Prisma.ReadReceiptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadReceiptPayload>
          }
          aggregate: {
            args: Prisma.ReadReceiptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReadReceipt>
          }
          groupBy: {
            args: Prisma.ReadReceiptGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReadReceiptGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReadReceiptCountArgs<ExtArgs>
            result: $Utils.Optional<ReadReceiptCountAggregateOutputType> | number
          }
        }
      }
      VideoCallRoom: {
        payload: Prisma.$VideoCallRoomPayload<ExtArgs>
        fields: Prisma.VideoCallRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoCallRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoCallRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallRoomPayload>
          }
          findFirst: {
            args: Prisma.VideoCallRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoCallRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallRoomPayload>
          }
          findMany: {
            args: Prisma.VideoCallRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallRoomPayload>[]
          }
          create: {
            args: Prisma.VideoCallRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallRoomPayload>
          }
          createMany: {
            args: Prisma.VideoCallRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCallRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallRoomPayload>[]
          }
          delete: {
            args: Prisma.VideoCallRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallRoomPayload>
          }
          update: {
            args: Prisma.VideoCallRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallRoomPayload>
          }
          deleteMany: {
            args: Prisma.VideoCallRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoCallRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoCallRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallRoomPayload>[]
          }
          upsert: {
            args: Prisma.VideoCallRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallRoomPayload>
          }
          aggregate: {
            args: Prisma.VideoCallRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoCallRoom>
          }
          groupBy: {
            args: Prisma.VideoCallRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoCallRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCallRoomCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCallRoomCountAggregateOutputType> | number
          }
        }
      }
      VideoCallParticipant: {
        payload: Prisma.$VideoCallParticipantPayload<ExtArgs>
        fields: Prisma.VideoCallParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoCallParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoCallParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallParticipantPayload>
          }
          findFirst: {
            args: Prisma.VideoCallParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoCallParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallParticipantPayload>
          }
          findMany: {
            args: Prisma.VideoCallParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallParticipantPayload>[]
          }
          create: {
            args: Prisma.VideoCallParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallParticipantPayload>
          }
          createMany: {
            args: Prisma.VideoCallParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCallParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallParticipantPayload>[]
          }
          delete: {
            args: Prisma.VideoCallParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallParticipantPayload>
          }
          update: {
            args: Prisma.VideoCallParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallParticipantPayload>
          }
          deleteMany: {
            args: Prisma.VideoCallParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoCallParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoCallParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallParticipantPayload>[]
          }
          upsert: {
            args: Prisma.VideoCallParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallParticipantPayload>
          }
          aggregate: {
            args: Prisma.VideoCallParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoCallParticipant>
          }
          groupBy: {
            args: Prisma.VideoCallParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoCallParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCallParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCallParticipantCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    conversation?: ConversationOmit
    conversationMember?: ConversationMemberOmit
    message?: MessageOmit
    attachment?: AttachmentOmit
    typingStatus?: TypingStatusOmit
    readReceipt?: ReadReceiptOmit
    videoCallRoom?: VideoCallRoomOmit
    videoCallParticipant?: VideoCallParticipantOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    sentMessages: number
    conversationMembers: number
    readReceipts: number
    typingStatuses: number
    videoCallRooms: number
    videoCallParticipants: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentMessages?: boolean | UsersCountOutputTypeCountSentMessagesArgs
    conversationMembers?: boolean | UsersCountOutputTypeCountConversationMembersArgs
    readReceipts?: boolean | UsersCountOutputTypeCountReadReceiptsArgs
    typingStatuses?: boolean | UsersCountOutputTypeCountTypingStatusesArgs
    videoCallRooms?: boolean | UsersCountOutputTypeCountVideoCallRoomsArgs
    videoCallParticipants?: boolean | UsersCountOutputTypeCountVideoCallParticipantsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountConversationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationMemberWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReadReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadReceiptWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTypingStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypingStatusWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountVideoCallRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoCallRoomWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountVideoCallParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoCallParticipantWhereInput
  }


  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    members: number
    messages: number
    typingStatus: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ConversationCountOutputTypeCountMembersArgs
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
    typingStatus?: boolean | ConversationCountOutputTypeCountTypingStatusArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationMemberWhereInput
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountTypingStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypingStatusWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    attachments: number
    readReceipts: number
    lastReadBy: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | MessageCountOutputTypeCountAttachmentsArgs
    readReceipts?: boolean | MessageCountOutputTypeCountReadReceiptsArgs
    lastReadBy?: boolean | MessageCountOutputTypeCountLastReadByArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountReadReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadReceiptWhereInput
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountLastReadByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationMemberWhereInput
  }


  /**
   * Count Type VideoCallRoomCountOutputType
   */

  export type VideoCallRoomCountOutputType = {
    participants: number
  }

  export type VideoCallRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | VideoCallRoomCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * VideoCallRoomCountOutputType without action
   */
  export type VideoCallRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallRoomCountOutputType
     */
    select?: VideoCallRoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideoCallRoomCountOutputType without action
   */
  export type VideoCallRoomCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoCallParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    fullname: string | null
    avatarUrl: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    fullname: string | null
    avatarUrl: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    fullname: number
    avatarUrl: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    fullname?: true
    avatarUrl?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    fullname?: true
    avatarUrl?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    fullname?: true
    avatarUrl?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    username: string
    fullname: string | null
    avatarUrl: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullname?: boolean
    avatarUrl?: boolean
    sentMessages?: boolean | Users$sentMessagesArgs<ExtArgs>
    conversationMembers?: boolean | Users$conversationMembersArgs<ExtArgs>
    readReceipts?: boolean | Users$readReceiptsArgs<ExtArgs>
    typingStatuses?: boolean | Users$typingStatusesArgs<ExtArgs>
    videoCallRooms?: boolean | Users$videoCallRoomsArgs<ExtArgs>
    videoCallParticipants?: boolean | Users$videoCallParticipantsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullname?: boolean
    avatarUrl?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullname?: boolean
    avatarUrl?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    fullname?: boolean
    avatarUrl?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "fullname" | "avatarUrl", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentMessages?: boolean | Users$sentMessagesArgs<ExtArgs>
    conversationMembers?: boolean | Users$conversationMembersArgs<ExtArgs>
    readReceipts?: boolean | Users$readReceiptsArgs<ExtArgs>
    typingStatuses?: boolean | Users$typingStatusesArgs<ExtArgs>
    videoCallRooms?: boolean | Users$videoCallRoomsArgs<ExtArgs>
    videoCallParticipants?: boolean | Users$videoCallParticipantsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      conversationMembers: Prisma.$ConversationMemberPayload<ExtArgs>[]
      readReceipts: Prisma.$ReadReceiptPayload<ExtArgs>[]
      typingStatuses: Prisma.$TypingStatusPayload<ExtArgs>[]
      videoCallRooms: Prisma.$VideoCallRoomPayload<ExtArgs>[]
      videoCallParticipants: Prisma.$VideoCallParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      fullname: string | null
      avatarUrl: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentMessages<T extends Users$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Users$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversationMembers<T extends Users$conversationMembersArgs<ExtArgs> = {}>(args?: Subset<T, Users$conversationMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    readReceipts<T extends Users$readReceiptsArgs<ExtArgs> = {}>(args?: Subset<T, Users$readReceiptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    typingStatuses<T extends Users$typingStatusesArgs<ExtArgs> = {}>(args?: Subset<T, Users$typingStatusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypingStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    videoCallRooms<T extends Users$videoCallRoomsArgs<ExtArgs> = {}>(args?: Subset<T, Users$videoCallRoomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoCallRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    videoCallParticipants<T extends Users$videoCallParticipantsArgs<ExtArgs> = {}>(args?: Subset<T, Users$videoCallParticipantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoCallParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly fullname: FieldRef<"Users", 'String'>
    readonly avatarUrl: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.sentMessages
   */
  export type Users$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Users.conversationMembers
   */
  export type Users$conversationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    where?: ConversationMemberWhereInput
    orderBy?: ConversationMemberOrderByWithRelationInput | ConversationMemberOrderByWithRelationInput[]
    cursor?: ConversationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationMemberScalarFieldEnum | ConversationMemberScalarFieldEnum[]
  }

  /**
   * Users.readReceipts
   */
  export type Users$readReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadReceipt
     */
    select?: ReadReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadReceipt
     */
    omit?: ReadReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadReceiptInclude<ExtArgs> | null
    where?: ReadReceiptWhereInput
    orderBy?: ReadReceiptOrderByWithRelationInput | ReadReceiptOrderByWithRelationInput[]
    cursor?: ReadReceiptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReadReceiptScalarFieldEnum | ReadReceiptScalarFieldEnum[]
  }

  /**
   * Users.typingStatuses
   */
  export type Users$typingStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypingStatus
     */
    select?: TypingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypingStatus
     */
    omit?: TypingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypingStatusInclude<ExtArgs> | null
    where?: TypingStatusWhereInput
    orderBy?: TypingStatusOrderByWithRelationInput | TypingStatusOrderByWithRelationInput[]
    cursor?: TypingStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TypingStatusScalarFieldEnum | TypingStatusScalarFieldEnum[]
  }

  /**
   * Users.videoCallRooms
   */
  export type Users$videoCallRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallRoom
     */
    select?: VideoCallRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallRoom
     */
    omit?: VideoCallRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallRoomInclude<ExtArgs> | null
    where?: VideoCallRoomWhereInput
    orderBy?: VideoCallRoomOrderByWithRelationInput | VideoCallRoomOrderByWithRelationInput[]
    cursor?: VideoCallRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoCallRoomScalarFieldEnum | VideoCallRoomScalarFieldEnum[]
  }

  /**
   * Users.videoCallParticipants
   */
  export type Users$videoCallParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallParticipant
     */
    select?: VideoCallParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallParticipant
     */
    omit?: VideoCallParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallParticipantInclude<ExtArgs> | null
    where?: VideoCallParticipantWhereInput
    orderBy?: VideoCallParticipantOrderByWithRelationInput | VideoCallParticipantOrderByWithRelationInput[]
    cursor?: VideoCallParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoCallParticipantScalarFieldEnum | VideoCallParticipantScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationMinAggregateOutputType = {
    id: string | null
    is_group: boolean | null
    name: string | null
    created_by: string | null
    created_at: Date | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: string | null
    is_group: boolean | null
    name: string | null
    created_by: string | null
    created_at: Date | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    is_group: number
    name: number
    created_by: number
    created_at: number
    _all: number
  }


  export type ConversationMinAggregateInputType = {
    id?: true
    is_group?: true
    name?: true
    created_by?: true
    created_at?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    is_group?: true
    name?: true
    created_by?: true
    created_at?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    is_group?: true
    name?: true
    created_by?: true
    created_at?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: string
    is_group: boolean
    name: string | null
    created_by: string | null
    created_at: Date | null
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_group?: boolean
    name?: boolean
    created_by?: boolean
    created_at?: boolean
    members?: boolean | Conversation$membersArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    typingStatus?: boolean | Conversation$typingStatusArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_group?: boolean
    name?: boolean
    created_by?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_group?: boolean
    name?: boolean
    created_by?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    is_group?: boolean
    name?: boolean
    created_by?: boolean
    created_at?: boolean
  }

  export type ConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "is_group" | "name" | "created_by" | "created_at", ExtArgs["result"]["conversation"]>
  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Conversation$membersArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    typingStatus?: boolean | Conversation$typingStatusArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      members: Prisma.$ConversationMemberPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      typingStatus: Prisma.$TypingStatusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      is_group: boolean
      name: string | null
      created_by: string | null
      created_at: Date | null
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {ConversationUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Conversation$membersArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Conversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    typingStatus<T extends Conversation$typingStatusArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$typingStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypingStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'String'>
    readonly is_group: FieldRef<"Conversation", 'Boolean'>
    readonly name: FieldRef<"Conversation", 'String'>
    readonly created_by: FieldRef<"Conversation", 'String'>
    readonly created_at: FieldRef<"Conversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data?: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation createManyAndReturn
   */
  export type ConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation updateManyAndReturn
   */
  export type ConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversation.members
   */
  export type Conversation$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    where?: ConversationMemberWhereInput
    orderBy?: ConversationMemberOrderByWithRelationInput | ConversationMemberOrderByWithRelationInput[]
    cursor?: ConversationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationMemberScalarFieldEnum | ConversationMemberScalarFieldEnum[]
  }

  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Conversation.typingStatus
   */
  export type Conversation$typingStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypingStatus
     */
    select?: TypingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypingStatus
     */
    omit?: TypingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypingStatusInclude<ExtArgs> | null
    where?: TypingStatusWhereInput
    orderBy?: TypingStatusOrderByWithRelationInput | TypingStatusOrderByWithRelationInput[]
    cursor?: TypingStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TypingStatusScalarFieldEnum | TypingStatusScalarFieldEnum[]
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model ConversationMember
   */

  export type AggregateConversationMember = {
    _count: ConversationMemberCountAggregateOutputType | null
    _min: ConversationMemberMinAggregateOutputType | null
    _max: ConversationMemberMaxAggregateOutputType | null
  }

  export type ConversationMemberMinAggregateOutputType = {
    conversation_id: string | null
    user_id: string | null
    joined_at: Date | null
    last_read_message_id: string | null
  }

  export type ConversationMemberMaxAggregateOutputType = {
    conversation_id: string | null
    user_id: string | null
    joined_at: Date | null
    last_read_message_id: string | null
  }

  export type ConversationMemberCountAggregateOutputType = {
    conversation_id: number
    user_id: number
    joined_at: number
    last_read_message_id: number
    _all: number
  }


  export type ConversationMemberMinAggregateInputType = {
    conversation_id?: true
    user_id?: true
    joined_at?: true
    last_read_message_id?: true
  }

  export type ConversationMemberMaxAggregateInputType = {
    conversation_id?: true
    user_id?: true
    joined_at?: true
    last_read_message_id?: true
  }

  export type ConversationMemberCountAggregateInputType = {
    conversation_id?: true
    user_id?: true
    joined_at?: true
    last_read_message_id?: true
    _all?: true
  }

  export type ConversationMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationMember to aggregate.
     */
    where?: ConversationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationMembers to fetch.
     */
    orderBy?: ConversationMemberOrderByWithRelationInput | ConversationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConversationMembers
    **/
    _count?: true | ConversationMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMemberMaxAggregateInputType
  }

  export type GetConversationMemberAggregateType<T extends ConversationMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateConversationMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversationMember[P]>
      : GetScalarType<T[P], AggregateConversationMember[P]>
  }




  export type ConversationMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationMemberWhereInput
    orderBy?: ConversationMemberOrderByWithAggregationInput | ConversationMemberOrderByWithAggregationInput[]
    by: ConversationMemberScalarFieldEnum[] | ConversationMemberScalarFieldEnum
    having?: ConversationMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationMemberCountAggregateInputType | true
    _min?: ConversationMemberMinAggregateInputType
    _max?: ConversationMemberMaxAggregateInputType
  }

  export type ConversationMemberGroupByOutputType = {
    conversation_id: string
    user_id: string
    joined_at: Date | null
    last_read_message_id: string | null
    _count: ConversationMemberCountAggregateOutputType | null
    _min: ConversationMemberMinAggregateOutputType | null
    _max: ConversationMemberMaxAggregateOutputType | null
  }

  type GetConversationMemberGroupByPayload<T extends ConversationMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationMemberGroupByOutputType[P]>
        }
      >
    >


  export type ConversationMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    conversation_id?: boolean
    user_id?: boolean
    joined_at?: boolean
    last_read_message_id?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    lastReadMessage?: boolean | ConversationMember$lastReadMessageArgs<ExtArgs>
  }, ExtArgs["result"]["conversationMember"]>

  export type ConversationMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    conversation_id?: boolean
    user_id?: boolean
    joined_at?: boolean
    last_read_message_id?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    lastReadMessage?: boolean | ConversationMember$lastReadMessageArgs<ExtArgs>
  }, ExtArgs["result"]["conversationMember"]>

  export type ConversationMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    conversation_id?: boolean
    user_id?: boolean
    joined_at?: boolean
    last_read_message_id?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    lastReadMessage?: boolean | ConversationMember$lastReadMessageArgs<ExtArgs>
  }, ExtArgs["result"]["conversationMember"]>

  export type ConversationMemberSelectScalar = {
    conversation_id?: boolean
    user_id?: boolean
    joined_at?: boolean
    last_read_message_id?: boolean
  }

  export type ConversationMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"conversation_id" | "user_id" | "joined_at" | "last_read_message_id", ExtArgs["result"]["conversationMember"]>
  export type ConversationMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    lastReadMessage?: boolean | ConversationMember$lastReadMessageArgs<ExtArgs>
  }
  export type ConversationMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    lastReadMessage?: boolean | ConversationMember$lastReadMessageArgs<ExtArgs>
  }
  export type ConversationMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    lastReadMessage?: boolean | ConversationMember$lastReadMessageArgs<ExtArgs>
  }

  export type $ConversationMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConversationMember"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
      lastReadMessage: Prisma.$MessagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      conversation_id: string
      user_id: string
      joined_at: Date | null
      last_read_message_id: string | null
    }, ExtArgs["result"]["conversationMember"]>
    composites: {}
  }

  type ConversationMemberGetPayload<S extends boolean | null | undefined | ConversationMemberDefaultArgs> = $Result.GetResult<Prisma.$ConversationMemberPayload, S>

  type ConversationMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationMemberCountAggregateInputType | true
    }

  export interface ConversationMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConversationMember'], meta: { name: 'ConversationMember' } }
    /**
     * Find zero or one ConversationMember that matches the filter.
     * @param {ConversationMemberFindUniqueArgs} args - Arguments to find a ConversationMember
     * @example
     * // Get one ConversationMember
     * const conversationMember = await prisma.conversationMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationMemberFindUniqueArgs>(args: SelectSubset<T, ConversationMemberFindUniqueArgs<ExtArgs>>): Prisma__ConversationMemberClient<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConversationMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationMemberFindUniqueOrThrowArgs} args - Arguments to find a ConversationMember
     * @example
     * // Get one ConversationMember
     * const conversationMember = await prisma.conversationMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationMemberClient<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversationMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemberFindFirstArgs} args - Arguments to find a ConversationMember
     * @example
     * // Get one ConversationMember
     * const conversationMember = await prisma.conversationMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationMemberFindFirstArgs>(args?: SelectSubset<T, ConversationMemberFindFirstArgs<ExtArgs>>): Prisma__ConversationMemberClient<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversationMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemberFindFirstOrThrowArgs} args - Arguments to find a ConversationMember
     * @example
     * // Get one ConversationMember
     * const conversationMember = await prisma.conversationMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationMemberClient<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConversationMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConversationMembers
     * const conversationMembers = await prisma.conversationMember.findMany()
     * 
     * // Get first 10 ConversationMembers
     * const conversationMembers = await prisma.conversationMember.findMany({ take: 10 })
     * 
     * // Only select the `conversation_id`
     * const conversationMemberWithConversation_idOnly = await prisma.conversationMember.findMany({ select: { conversation_id: true } })
     * 
     */
    findMany<T extends ConversationMemberFindManyArgs>(args?: SelectSubset<T, ConversationMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConversationMember.
     * @param {ConversationMemberCreateArgs} args - Arguments to create a ConversationMember.
     * @example
     * // Create one ConversationMember
     * const ConversationMember = await prisma.conversationMember.create({
     *   data: {
     *     // ... data to create a ConversationMember
     *   }
     * })
     * 
     */
    create<T extends ConversationMemberCreateArgs>(args: SelectSubset<T, ConversationMemberCreateArgs<ExtArgs>>): Prisma__ConversationMemberClient<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConversationMembers.
     * @param {ConversationMemberCreateManyArgs} args - Arguments to create many ConversationMembers.
     * @example
     * // Create many ConversationMembers
     * const conversationMember = await prisma.conversationMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationMemberCreateManyArgs>(args?: SelectSubset<T, ConversationMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConversationMembers and returns the data saved in the database.
     * @param {ConversationMemberCreateManyAndReturnArgs} args - Arguments to create many ConversationMembers.
     * @example
     * // Create many ConversationMembers
     * const conversationMember = await prisma.conversationMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConversationMembers and only return the `conversation_id`
     * const conversationMemberWithConversation_idOnly = await prisma.conversationMember.createManyAndReturn({
     *   select: { conversation_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConversationMember.
     * @param {ConversationMemberDeleteArgs} args - Arguments to delete one ConversationMember.
     * @example
     * // Delete one ConversationMember
     * const ConversationMember = await prisma.conversationMember.delete({
     *   where: {
     *     // ... filter to delete one ConversationMember
     *   }
     * })
     * 
     */
    delete<T extends ConversationMemberDeleteArgs>(args: SelectSubset<T, ConversationMemberDeleteArgs<ExtArgs>>): Prisma__ConversationMemberClient<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConversationMember.
     * @param {ConversationMemberUpdateArgs} args - Arguments to update one ConversationMember.
     * @example
     * // Update one ConversationMember
     * const conversationMember = await prisma.conversationMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationMemberUpdateArgs>(args: SelectSubset<T, ConversationMemberUpdateArgs<ExtArgs>>): Prisma__ConversationMemberClient<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConversationMembers.
     * @param {ConversationMemberDeleteManyArgs} args - Arguments to filter ConversationMembers to delete.
     * @example
     * // Delete a few ConversationMembers
     * const { count } = await prisma.conversationMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationMemberDeleteManyArgs>(args?: SelectSubset<T, ConversationMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConversationMembers
     * const conversationMember = await prisma.conversationMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationMemberUpdateManyArgs>(args: SelectSubset<T, ConversationMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversationMembers and returns the data updated in the database.
     * @param {ConversationMemberUpdateManyAndReturnArgs} args - Arguments to update many ConversationMembers.
     * @example
     * // Update many ConversationMembers
     * const conversationMember = await prisma.conversationMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConversationMembers and only return the `conversation_id`
     * const conversationMemberWithConversation_idOnly = await prisma.conversationMember.updateManyAndReturn({
     *   select: { conversation_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversationMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConversationMember.
     * @param {ConversationMemberUpsertArgs} args - Arguments to update or create a ConversationMember.
     * @example
     * // Update or create a ConversationMember
     * const conversationMember = await prisma.conversationMember.upsert({
     *   create: {
     *     // ... data to create a ConversationMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConversationMember we want to update
     *   }
     * })
     */
    upsert<T extends ConversationMemberUpsertArgs>(args: SelectSubset<T, ConversationMemberUpsertArgs<ExtArgs>>): Prisma__ConversationMemberClient<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConversationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemberCountArgs} args - Arguments to filter ConversationMembers to count.
     * @example
     * // Count the number of ConversationMembers
     * const count = await prisma.conversationMember.count({
     *   where: {
     *     // ... the filter for the ConversationMembers we want to count
     *   }
     * })
    **/
    count<T extends ConversationMemberCountArgs>(
      args?: Subset<T, ConversationMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConversationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationMemberAggregateArgs>(args: Subset<T, ConversationMemberAggregateArgs>): Prisma.PrismaPromise<GetConversationMemberAggregateType<T>>

    /**
     * Group by ConversationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationMemberGroupByArgs['orderBy'] }
        : { orderBy?: ConversationMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConversationMember model
   */
  readonly fields: ConversationMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConversationMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lastReadMessage<T extends ConversationMember$lastReadMessageArgs<ExtArgs> = {}>(args?: Subset<T, ConversationMember$lastReadMessageArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConversationMember model
   */
  interface ConversationMemberFieldRefs {
    readonly conversation_id: FieldRef<"ConversationMember", 'String'>
    readonly user_id: FieldRef<"ConversationMember", 'String'>
    readonly joined_at: FieldRef<"ConversationMember", 'DateTime'>
    readonly last_read_message_id: FieldRef<"ConversationMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ConversationMember findUnique
   */
  export type ConversationMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMember to fetch.
     */
    where: ConversationMemberWhereUniqueInput
  }

  /**
   * ConversationMember findUniqueOrThrow
   */
  export type ConversationMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMember to fetch.
     */
    where: ConversationMemberWhereUniqueInput
  }

  /**
   * ConversationMember findFirst
   */
  export type ConversationMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMember to fetch.
     */
    where?: ConversationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationMembers to fetch.
     */
    orderBy?: ConversationMemberOrderByWithRelationInput | ConversationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationMembers.
     */
    cursor?: ConversationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationMembers.
     */
    distinct?: ConversationMemberScalarFieldEnum | ConversationMemberScalarFieldEnum[]
  }

  /**
   * ConversationMember findFirstOrThrow
   */
  export type ConversationMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMember to fetch.
     */
    where?: ConversationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationMembers to fetch.
     */
    orderBy?: ConversationMemberOrderByWithRelationInput | ConversationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationMembers.
     */
    cursor?: ConversationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationMembers.
     */
    distinct?: ConversationMemberScalarFieldEnum | ConversationMemberScalarFieldEnum[]
  }

  /**
   * ConversationMember findMany
   */
  export type ConversationMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMembers to fetch.
     */
    where?: ConversationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationMembers to fetch.
     */
    orderBy?: ConversationMemberOrderByWithRelationInput | ConversationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConversationMembers.
     */
    cursor?: ConversationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationMembers.
     */
    skip?: number
    distinct?: ConversationMemberScalarFieldEnum | ConversationMemberScalarFieldEnum[]
  }

  /**
   * ConversationMember create
   */
  export type ConversationMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ConversationMember.
     */
    data: XOR<ConversationMemberCreateInput, ConversationMemberUncheckedCreateInput>
  }

  /**
   * ConversationMember createMany
   */
  export type ConversationMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConversationMembers.
     */
    data: ConversationMemberCreateManyInput | ConversationMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConversationMember createManyAndReturn
   */
  export type ConversationMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * The data used to create many ConversationMembers.
     */
    data: ConversationMemberCreateManyInput | ConversationMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversationMember update
   */
  export type ConversationMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ConversationMember.
     */
    data: XOR<ConversationMemberUpdateInput, ConversationMemberUncheckedUpdateInput>
    /**
     * Choose, which ConversationMember to update.
     */
    where: ConversationMemberWhereUniqueInput
  }

  /**
   * ConversationMember updateMany
   */
  export type ConversationMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConversationMembers.
     */
    data: XOR<ConversationMemberUpdateManyMutationInput, ConversationMemberUncheckedUpdateManyInput>
    /**
     * Filter which ConversationMembers to update
     */
    where?: ConversationMemberWhereInput
    /**
     * Limit how many ConversationMembers to update.
     */
    limit?: number
  }

  /**
   * ConversationMember updateManyAndReturn
   */
  export type ConversationMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * The data used to update ConversationMembers.
     */
    data: XOR<ConversationMemberUpdateManyMutationInput, ConversationMemberUncheckedUpdateManyInput>
    /**
     * Filter which ConversationMembers to update
     */
    where?: ConversationMemberWhereInput
    /**
     * Limit how many ConversationMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversationMember upsert
   */
  export type ConversationMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ConversationMember to update in case it exists.
     */
    where: ConversationMemberWhereUniqueInput
    /**
     * In case the ConversationMember found by the `where` argument doesn't exist, create a new ConversationMember with this data.
     */
    create: XOR<ConversationMemberCreateInput, ConversationMemberUncheckedCreateInput>
    /**
     * In case the ConversationMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationMemberUpdateInput, ConversationMemberUncheckedUpdateInput>
  }

  /**
   * ConversationMember delete
   */
  export type ConversationMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    /**
     * Filter which ConversationMember to delete.
     */
    where: ConversationMemberWhereUniqueInput
  }

  /**
   * ConversationMember deleteMany
   */
  export type ConversationMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationMembers to delete
     */
    where?: ConversationMemberWhereInput
    /**
     * Limit how many ConversationMembers to delete.
     */
    limit?: number
  }

  /**
   * ConversationMember.lastReadMessage
   */
  export type ConversationMember$lastReadMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
  }

  /**
   * ConversationMember without action
   */
  export type ConversationMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    conversation_id: string | null
    sender_id: string | null
    status: $Enums.MessageStatus | null
    message: string | null
    message_type: $Enums.MessageType | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    conversation_id: string | null
    sender_id: string | null
    status: $Enums.MessageStatus | null
    message: string | null
    message_type: $Enums.MessageType | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    conversation_id: number
    sender_id: number
    status: number
    message: number
    message_type: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    conversation_id?: true
    sender_id?: true
    status?: true
    message?: true
    message_type?: true
    created_at?: true
    updated_at?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    conversation_id?: true
    sender_id?: true
    status?: true
    message?: true
    message_type?: true
    created_at?: true
    updated_at?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    conversation_id?: true
    sender_id?: true
    status?: true
    message?: true
    message_type?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    conversation_id: string
    sender_id: string
    status: $Enums.MessageStatus
    message: string
    message_type: $Enums.MessageType
    created_at: Date
    updated_at: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversation_id?: boolean
    sender_id?: boolean
    status?: boolean
    message?: boolean
    message_type?: boolean
    created_at?: boolean
    updated_at?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UsersDefaultArgs<ExtArgs>
    attachments?: boolean | Message$attachmentsArgs<ExtArgs>
    readReceipts?: boolean | Message$readReceiptsArgs<ExtArgs>
    lastReadBy?: boolean | Message$lastReadByArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversation_id?: boolean
    sender_id?: boolean
    status?: boolean
    message?: boolean
    message_type?: boolean
    created_at?: boolean
    updated_at?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversation_id?: boolean
    sender_id?: boolean
    status?: boolean
    message?: boolean
    message_type?: boolean
    created_at?: boolean
    updated_at?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    conversation_id?: boolean
    sender_id?: boolean
    status?: boolean
    message?: boolean
    message_type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversation_id" | "sender_id" | "status" | "message" | "message_type" | "created_at" | "updated_at", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UsersDefaultArgs<ExtArgs>
    attachments?: boolean | Message$attachmentsArgs<ExtArgs>
    readReceipts?: boolean | Message$readReceiptsArgs<ExtArgs>
    lastReadBy?: boolean | Message$lastReadByArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs>
      sender: Prisma.$UsersPayload<ExtArgs>
      attachments: Prisma.$AttachmentPayload<ExtArgs>[]
      readReceipts: Prisma.$ReadReceiptPayload<ExtArgs>[]
      lastReadBy: Prisma.$ConversationMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conversation_id: string
      sender_id: string
      status: $Enums.MessageStatus
      message: string
      message_type: $Enums.MessageType
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attachments<T extends Message$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Message$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    readReceipts<T extends Message$readReceiptsArgs<ExtArgs> = {}>(args?: Subset<T, Message$readReceiptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lastReadBy<T extends Message$lastReadByArgs<ExtArgs> = {}>(args?: Subset<T, Message$lastReadByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly conversation_id: FieldRef<"Message", 'String'>
    readonly sender_id: FieldRef<"Message", 'String'>
    readonly status: FieldRef<"Message", 'MessageStatus'>
    readonly message: FieldRef<"Message", 'String'>
    readonly message_type: FieldRef<"Message", 'MessageType'>
    readonly created_at: FieldRef<"Message", 'DateTime'>
    readonly updated_at: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.attachments
   */
  export type Message$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Message.readReceipts
   */
  export type Message$readReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadReceipt
     */
    select?: ReadReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadReceipt
     */
    omit?: ReadReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadReceiptInclude<ExtArgs> | null
    where?: ReadReceiptWhereInput
    orderBy?: ReadReceiptOrderByWithRelationInput | ReadReceiptOrderByWithRelationInput[]
    cursor?: ReadReceiptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReadReceiptScalarFieldEnum | ReadReceiptScalarFieldEnum[]
  }

  /**
   * Message.lastReadBy
   */
  export type Message$lastReadByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMember
     */
    select?: ConversationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMember
     */
    omit?: ConversationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMemberInclude<ExtArgs> | null
    where?: ConversationMemberWhereInput
    orderBy?: ConversationMemberOrderByWithRelationInput | ConversationMemberOrderByWithRelationInput[]
    cursor?: ConversationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationMemberScalarFieldEnum | ConversationMemberScalarFieldEnum[]
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Attachment
   */

  export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  export type AttachmentMinAggregateOutputType = {
    id: string | null
    message_id: string | null
    file_url: string | null
    file_type: $Enums.FileType | null
    created_at: Date | null
  }

  export type AttachmentMaxAggregateOutputType = {
    id: string | null
    message_id: string | null
    file_url: string | null
    file_type: $Enums.FileType | null
    created_at: Date | null
  }

  export type AttachmentCountAggregateOutputType = {
    id: number
    message_id: number
    file_url: number
    file_type: number
    created_at: number
    _all: number
  }


  export type AttachmentMinAggregateInputType = {
    id?: true
    message_id?: true
    file_url?: true
    file_type?: true
    created_at?: true
  }

  export type AttachmentMaxAggregateInputType = {
    id?: true
    message_id?: true
    file_url?: true
    file_type?: true
    created_at?: true
  }

  export type AttachmentCountAggregateInputType = {
    id?: true
    message_id?: true
    file_url?: true
    file_type?: true
    created_at?: true
    _all?: true
  }

  export type AttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachment to aggregate.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentMaxAggregateInputType
  }

  export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachment[P]>
      : GetScalarType<T[P], AggregateAttachment[P]>
  }




  export type AttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithAggregationInput | AttachmentOrderByWithAggregationInput[]
    by: AttachmentScalarFieldEnum[] | AttachmentScalarFieldEnum
    having?: AttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentCountAggregateInputType | true
    _min?: AttachmentMinAggregateInputType
    _max?: AttachmentMaxAggregateInputType
  }

  export type AttachmentGroupByOutputType = {
    id: string
    message_id: string | null
    file_url: string
    file_type: $Enums.FileType | null
    created_at: Date | null
    _count: AttachmentCountAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_id?: boolean
    file_url?: boolean
    file_type?: boolean
    created_at?: boolean
    message?: boolean | Attachment$messageArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_id?: boolean
    file_url?: boolean
    file_type?: boolean
    created_at?: boolean
    message?: boolean | Attachment$messageArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_id?: boolean
    file_url?: boolean
    file_type?: boolean
    created_at?: boolean
    message?: boolean | Attachment$messageArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectScalar = {
    id?: boolean
    message_id?: boolean
    file_url?: boolean
    file_type?: boolean
    created_at?: boolean
  }

  export type AttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message_id" | "file_url" | "file_type" | "created_at", ExtArgs["result"]["attachment"]>
  export type AttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | Attachment$messageArgs<ExtArgs>
  }
  export type AttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | Attachment$messageArgs<ExtArgs>
  }
  export type AttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | Attachment$messageArgs<ExtArgs>
  }

  export type $AttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attachment"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message_id: string | null
      file_url: string
      file_type: $Enums.FileType | null
      created_at: Date | null
    }, ExtArgs["result"]["attachment"]>
    composites: {}
  }

  type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = $Result.GetResult<Prisma.$AttachmentPayload, S>

  type AttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentCountAggregateInputType | true
    }

  export interface AttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachment'], meta: { name: 'Attachment' } }
    /**
     * Find zero or one Attachment that matches the filter.
     * @param {AttachmentFindUniqueArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttachmentFindUniqueArgs>(args: SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttachmentFindUniqueOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttachmentFindFirstArgs>(args?: SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachment.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentWithIdOnly = await prisma.attachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttachmentFindManyArgs>(args?: SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachment.
     * @param {AttachmentCreateArgs} args - Arguments to create a Attachment.
     * @example
     * // Create one Attachment
     * const Attachment = await prisma.attachment.create({
     *   data: {
     *     // ... data to create a Attachment
     *   }
     * })
     * 
     */
    create<T extends AttachmentCreateArgs>(args: SelectSubset<T, AttachmentCreateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {AttachmentCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttachmentCreateManyArgs>(args?: SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attachments and returns the data saved in the database.
     * @param {AttachmentCreateManyAndReturnArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attachment.
     * @param {AttachmentDeleteArgs} args - Arguments to delete one Attachment.
     * @example
     * // Delete one Attachment
     * const Attachment = await prisma.attachment.delete({
     *   where: {
     *     // ... filter to delete one Attachment
     *   }
     * })
     * 
     */
    delete<T extends AttachmentDeleteArgs>(args: SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachment.
     * @param {AttachmentUpdateArgs} args - Arguments to update one Attachment.
     * @example
     * // Update one Attachment
     * const attachment = await prisma.attachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttachmentUpdateArgs>(args: SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttachmentDeleteManyArgs>(args?: SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttachmentUpdateManyArgs>(args: SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments and returns the data updated in the database.
     * @param {AttachmentUpdateManyAndReturnArgs} args - Arguments to update many Attachments.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attachment.
     * @param {AttachmentUpsertArgs} args - Arguments to update or create a Attachment.
     * @example
     * // Update or create a Attachment
     * const attachment = await prisma.attachment.upsert({
     *   create: {
     *     // ... data to create a Attachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachment we want to update
     *   }
     * })
     */
    upsert<T extends AttachmentUpsertArgs>(args: SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachment.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentCountArgs>(
      args?: Subset<T, AttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttachmentAggregateArgs>(args: Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>

    /**
     * Group by Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attachment model
   */
  readonly fields: AttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends Attachment$messageArgs<ExtArgs> = {}>(args?: Subset<T, Attachment$messageArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attachment model
   */
  interface AttachmentFieldRefs {
    readonly id: FieldRef<"Attachment", 'String'>
    readonly message_id: FieldRef<"Attachment", 'String'>
    readonly file_url: FieldRef<"Attachment", 'String'>
    readonly file_type: FieldRef<"Attachment", 'FileType'>
    readonly created_at: FieldRef<"Attachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attachment findUnique
   */
  export type AttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findUniqueOrThrow
   */
  export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findFirst
   */
  export type AttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findFirstOrThrow
   */
  export type AttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findMany
   */
  export type AttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment create
   */
  export type AttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachment.
     */
    data: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
  }

  /**
   * Attachment createMany
   */
  export type AttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attachment createManyAndReturn
   */
  export type AttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachment update
   */
  export type AttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachment.
     */
    data: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
    /**
     * Choose, which Attachment to update.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment updateMany
   */
  export type AttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
  }

  /**
   * Attachment updateManyAndReturn
   */
  export type AttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachment upsert
   */
  export type AttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachment to update in case it exists.
     */
    where: AttachmentWhereUniqueInput
    /**
     * In case the Attachment found by the `where` argument doesn't exist, create a new Attachment with this data.
     */
    create: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
    /**
     * In case the Attachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
  }

  /**
   * Attachment delete
   */
  export type AttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter which Attachment to delete.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment deleteMany
   */
  export type AttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to delete.
     */
    limit?: number
  }

  /**
   * Attachment.message
   */
  export type Attachment$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
  }

  /**
   * Attachment without action
   */
  export type AttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
  }


  /**
   * Model TypingStatus
   */

  export type AggregateTypingStatus = {
    _count: TypingStatusCountAggregateOutputType | null
    _min: TypingStatusMinAggregateOutputType | null
    _max: TypingStatusMaxAggregateOutputType | null
  }

  export type TypingStatusMinAggregateOutputType = {
    conversation_id: string | null
    user_id: string | null
    is_typing: boolean | null
    updated_at: Date | null
  }

  export type TypingStatusMaxAggregateOutputType = {
    conversation_id: string | null
    user_id: string | null
    is_typing: boolean | null
    updated_at: Date | null
  }

  export type TypingStatusCountAggregateOutputType = {
    conversation_id: number
    user_id: number
    is_typing: number
    updated_at: number
    _all: number
  }


  export type TypingStatusMinAggregateInputType = {
    conversation_id?: true
    user_id?: true
    is_typing?: true
    updated_at?: true
  }

  export type TypingStatusMaxAggregateInputType = {
    conversation_id?: true
    user_id?: true
    is_typing?: true
    updated_at?: true
  }

  export type TypingStatusCountAggregateInputType = {
    conversation_id?: true
    user_id?: true
    is_typing?: true
    updated_at?: true
    _all?: true
  }

  export type TypingStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypingStatus to aggregate.
     */
    where?: TypingStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypingStatuses to fetch.
     */
    orderBy?: TypingStatusOrderByWithRelationInput | TypingStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypingStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypingStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypingStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TypingStatuses
    **/
    _count?: true | TypingStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypingStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypingStatusMaxAggregateInputType
  }

  export type GetTypingStatusAggregateType<T extends TypingStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateTypingStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypingStatus[P]>
      : GetScalarType<T[P], AggregateTypingStatus[P]>
  }




  export type TypingStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypingStatusWhereInput
    orderBy?: TypingStatusOrderByWithAggregationInput | TypingStatusOrderByWithAggregationInput[]
    by: TypingStatusScalarFieldEnum[] | TypingStatusScalarFieldEnum
    having?: TypingStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypingStatusCountAggregateInputType | true
    _min?: TypingStatusMinAggregateInputType
    _max?: TypingStatusMaxAggregateInputType
  }

  export type TypingStatusGroupByOutputType = {
    conversation_id: string
    user_id: string
    is_typing: boolean
    updated_at: Date | null
    _count: TypingStatusCountAggregateOutputType | null
    _min: TypingStatusMinAggregateOutputType | null
    _max: TypingStatusMaxAggregateOutputType | null
  }

  type GetTypingStatusGroupByPayload<T extends TypingStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypingStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypingStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypingStatusGroupByOutputType[P]>
            : GetScalarType<T[P], TypingStatusGroupByOutputType[P]>
        }
      >
    >


  export type TypingStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    conversation_id?: boolean
    user_id?: boolean
    is_typing?: boolean
    updated_at?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typingStatus"]>

  export type TypingStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    conversation_id?: boolean
    user_id?: boolean
    is_typing?: boolean
    updated_at?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typingStatus"]>

  export type TypingStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    conversation_id?: boolean
    user_id?: boolean
    is_typing?: boolean
    updated_at?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typingStatus"]>

  export type TypingStatusSelectScalar = {
    conversation_id?: boolean
    user_id?: boolean
    is_typing?: boolean
    updated_at?: boolean
  }

  export type TypingStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"conversation_id" | "user_id" | "is_typing" | "updated_at", ExtArgs["result"]["typingStatus"]>
  export type TypingStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TypingStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TypingStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $TypingStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TypingStatus"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      conversation_id: string
      user_id: string
      is_typing: boolean
      updated_at: Date | null
    }, ExtArgs["result"]["typingStatus"]>
    composites: {}
  }

  type TypingStatusGetPayload<S extends boolean | null | undefined | TypingStatusDefaultArgs> = $Result.GetResult<Prisma.$TypingStatusPayload, S>

  type TypingStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TypingStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypingStatusCountAggregateInputType | true
    }

  export interface TypingStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TypingStatus'], meta: { name: 'TypingStatus' } }
    /**
     * Find zero or one TypingStatus that matches the filter.
     * @param {TypingStatusFindUniqueArgs} args - Arguments to find a TypingStatus
     * @example
     * // Get one TypingStatus
     * const typingStatus = await prisma.typingStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypingStatusFindUniqueArgs>(args: SelectSubset<T, TypingStatusFindUniqueArgs<ExtArgs>>): Prisma__TypingStatusClient<$Result.GetResult<Prisma.$TypingStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TypingStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypingStatusFindUniqueOrThrowArgs} args - Arguments to find a TypingStatus
     * @example
     * // Get one TypingStatus
     * const typingStatus = await prisma.typingStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypingStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, TypingStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypingStatusClient<$Result.GetResult<Prisma.$TypingStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TypingStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypingStatusFindFirstArgs} args - Arguments to find a TypingStatus
     * @example
     * // Get one TypingStatus
     * const typingStatus = await prisma.typingStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypingStatusFindFirstArgs>(args?: SelectSubset<T, TypingStatusFindFirstArgs<ExtArgs>>): Prisma__TypingStatusClient<$Result.GetResult<Prisma.$TypingStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TypingStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypingStatusFindFirstOrThrowArgs} args - Arguments to find a TypingStatus
     * @example
     * // Get one TypingStatus
     * const typingStatus = await prisma.typingStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypingStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, TypingStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypingStatusClient<$Result.GetResult<Prisma.$TypingStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TypingStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypingStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TypingStatuses
     * const typingStatuses = await prisma.typingStatus.findMany()
     * 
     * // Get first 10 TypingStatuses
     * const typingStatuses = await prisma.typingStatus.findMany({ take: 10 })
     * 
     * // Only select the `conversation_id`
     * const typingStatusWithConversation_idOnly = await prisma.typingStatus.findMany({ select: { conversation_id: true } })
     * 
     */
    findMany<T extends TypingStatusFindManyArgs>(args?: SelectSubset<T, TypingStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypingStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TypingStatus.
     * @param {TypingStatusCreateArgs} args - Arguments to create a TypingStatus.
     * @example
     * // Create one TypingStatus
     * const TypingStatus = await prisma.typingStatus.create({
     *   data: {
     *     // ... data to create a TypingStatus
     *   }
     * })
     * 
     */
    create<T extends TypingStatusCreateArgs>(args: SelectSubset<T, TypingStatusCreateArgs<ExtArgs>>): Prisma__TypingStatusClient<$Result.GetResult<Prisma.$TypingStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TypingStatuses.
     * @param {TypingStatusCreateManyArgs} args - Arguments to create many TypingStatuses.
     * @example
     * // Create many TypingStatuses
     * const typingStatus = await prisma.typingStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypingStatusCreateManyArgs>(args?: SelectSubset<T, TypingStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TypingStatuses and returns the data saved in the database.
     * @param {TypingStatusCreateManyAndReturnArgs} args - Arguments to create many TypingStatuses.
     * @example
     * // Create many TypingStatuses
     * const typingStatus = await prisma.typingStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TypingStatuses and only return the `conversation_id`
     * const typingStatusWithConversation_idOnly = await prisma.typingStatus.createManyAndReturn({
     *   select: { conversation_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TypingStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, TypingStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypingStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TypingStatus.
     * @param {TypingStatusDeleteArgs} args - Arguments to delete one TypingStatus.
     * @example
     * // Delete one TypingStatus
     * const TypingStatus = await prisma.typingStatus.delete({
     *   where: {
     *     // ... filter to delete one TypingStatus
     *   }
     * })
     * 
     */
    delete<T extends TypingStatusDeleteArgs>(args: SelectSubset<T, TypingStatusDeleteArgs<ExtArgs>>): Prisma__TypingStatusClient<$Result.GetResult<Prisma.$TypingStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TypingStatus.
     * @param {TypingStatusUpdateArgs} args - Arguments to update one TypingStatus.
     * @example
     * // Update one TypingStatus
     * const typingStatus = await prisma.typingStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypingStatusUpdateArgs>(args: SelectSubset<T, TypingStatusUpdateArgs<ExtArgs>>): Prisma__TypingStatusClient<$Result.GetResult<Prisma.$TypingStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TypingStatuses.
     * @param {TypingStatusDeleteManyArgs} args - Arguments to filter TypingStatuses to delete.
     * @example
     * // Delete a few TypingStatuses
     * const { count } = await prisma.typingStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypingStatusDeleteManyArgs>(args?: SelectSubset<T, TypingStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TypingStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypingStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TypingStatuses
     * const typingStatus = await prisma.typingStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypingStatusUpdateManyArgs>(args: SelectSubset<T, TypingStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TypingStatuses and returns the data updated in the database.
     * @param {TypingStatusUpdateManyAndReturnArgs} args - Arguments to update many TypingStatuses.
     * @example
     * // Update many TypingStatuses
     * const typingStatus = await prisma.typingStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TypingStatuses and only return the `conversation_id`
     * const typingStatusWithConversation_idOnly = await prisma.typingStatus.updateManyAndReturn({
     *   select: { conversation_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TypingStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, TypingStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypingStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TypingStatus.
     * @param {TypingStatusUpsertArgs} args - Arguments to update or create a TypingStatus.
     * @example
     * // Update or create a TypingStatus
     * const typingStatus = await prisma.typingStatus.upsert({
     *   create: {
     *     // ... data to create a TypingStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TypingStatus we want to update
     *   }
     * })
     */
    upsert<T extends TypingStatusUpsertArgs>(args: SelectSubset<T, TypingStatusUpsertArgs<ExtArgs>>): Prisma__TypingStatusClient<$Result.GetResult<Prisma.$TypingStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TypingStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypingStatusCountArgs} args - Arguments to filter TypingStatuses to count.
     * @example
     * // Count the number of TypingStatuses
     * const count = await prisma.typingStatus.count({
     *   where: {
     *     // ... the filter for the TypingStatuses we want to count
     *   }
     * })
    **/
    count<T extends TypingStatusCountArgs>(
      args?: Subset<T, TypingStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypingStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TypingStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypingStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypingStatusAggregateArgs>(args: Subset<T, TypingStatusAggregateArgs>): Prisma.PrismaPromise<GetTypingStatusAggregateType<T>>

    /**
     * Group by TypingStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypingStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TypingStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypingStatusGroupByArgs['orderBy'] }
        : { orderBy?: TypingStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TypingStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypingStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TypingStatus model
   */
  readonly fields: TypingStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TypingStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypingStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TypingStatus model
   */
  interface TypingStatusFieldRefs {
    readonly conversation_id: FieldRef<"TypingStatus", 'String'>
    readonly user_id: FieldRef<"TypingStatus", 'String'>
    readonly is_typing: FieldRef<"TypingStatus", 'Boolean'>
    readonly updated_at: FieldRef<"TypingStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TypingStatus findUnique
   */
  export type TypingStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypingStatus
     */
    select?: TypingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypingStatus
     */
    omit?: TypingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypingStatusInclude<ExtArgs> | null
    /**
     * Filter, which TypingStatus to fetch.
     */
    where: TypingStatusWhereUniqueInput
  }

  /**
   * TypingStatus findUniqueOrThrow
   */
  export type TypingStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypingStatus
     */
    select?: TypingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypingStatus
     */
    omit?: TypingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypingStatusInclude<ExtArgs> | null
    /**
     * Filter, which TypingStatus to fetch.
     */
    where: TypingStatusWhereUniqueInput
  }

  /**
   * TypingStatus findFirst
   */
  export type TypingStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypingStatus
     */
    select?: TypingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypingStatus
     */
    omit?: TypingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypingStatusInclude<ExtArgs> | null
    /**
     * Filter, which TypingStatus to fetch.
     */
    where?: TypingStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypingStatuses to fetch.
     */
    orderBy?: TypingStatusOrderByWithRelationInput | TypingStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypingStatuses.
     */
    cursor?: TypingStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypingStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypingStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypingStatuses.
     */
    distinct?: TypingStatusScalarFieldEnum | TypingStatusScalarFieldEnum[]
  }

  /**
   * TypingStatus findFirstOrThrow
   */
  export type TypingStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypingStatus
     */
    select?: TypingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypingStatus
     */
    omit?: TypingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypingStatusInclude<ExtArgs> | null
    /**
     * Filter, which TypingStatus to fetch.
     */
    where?: TypingStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypingStatuses to fetch.
     */
    orderBy?: TypingStatusOrderByWithRelationInput | TypingStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypingStatuses.
     */
    cursor?: TypingStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypingStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypingStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypingStatuses.
     */
    distinct?: TypingStatusScalarFieldEnum | TypingStatusScalarFieldEnum[]
  }

  /**
   * TypingStatus findMany
   */
  export type TypingStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypingStatus
     */
    select?: TypingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypingStatus
     */
    omit?: TypingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypingStatusInclude<ExtArgs> | null
    /**
     * Filter, which TypingStatuses to fetch.
     */
    where?: TypingStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypingStatuses to fetch.
     */
    orderBy?: TypingStatusOrderByWithRelationInput | TypingStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TypingStatuses.
     */
    cursor?: TypingStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypingStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypingStatuses.
     */
    skip?: number
    distinct?: TypingStatusScalarFieldEnum | TypingStatusScalarFieldEnum[]
  }

  /**
   * TypingStatus create
   */
  export type TypingStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypingStatus
     */
    select?: TypingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypingStatus
     */
    omit?: TypingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypingStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a TypingStatus.
     */
    data: XOR<TypingStatusCreateInput, TypingStatusUncheckedCreateInput>
  }

  /**
   * TypingStatus createMany
   */
  export type TypingStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TypingStatuses.
     */
    data: TypingStatusCreateManyInput | TypingStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TypingStatus createManyAndReturn
   */
  export type TypingStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypingStatus
     */
    select?: TypingStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TypingStatus
     */
    omit?: TypingStatusOmit<ExtArgs> | null
    /**
     * The data used to create many TypingStatuses.
     */
    data: TypingStatusCreateManyInput | TypingStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypingStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TypingStatus update
   */
  export type TypingStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypingStatus
     */
    select?: TypingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypingStatus
     */
    omit?: TypingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypingStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a TypingStatus.
     */
    data: XOR<TypingStatusUpdateInput, TypingStatusUncheckedUpdateInput>
    /**
     * Choose, which TypingStatus to update.
     */
    where: TypingStatusWhereUniqueInput
  }

  /**
   * TypingStatus updateMany
   */
  export type TypingStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TypingStatuses.
     */
    data: XOR<TypingStatusUpdateManyMutationInput, TypingStatusUncheckedUpdateManyInput>
    /**
     * Filter which TypingStatuses to update
     */
    where?: TypingStatusWhereInput
    /**
     * Limit how many TypingStatuses to update.
     */
    limit?: number
  }

  /**
   * TypingStatus updateManyAndReturn
   */
  export type TypingStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypingStatus
     */
    select?: TypingStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TypingStatus
     */
    omit?: TypingStatusOmit<ExtArgs> | null
    /**
     * The data used to update TypingStatuses.
     */
    data: XOR<TypingStatusUpdateManyMutationInput, TypingStatusUncheckedUpdateManyInput>
    /**
     * Filter which TypingStatuses to update
     */
    where?: TypingStatusWhereInput
    /**
     * Limit how many TypingStatuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypingStatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TypingStatus upsert
   */
  export type TypingStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypingStatus
     */
    select?: TypingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypingStatus
     */
    omit?: TypingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypingStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the TypingStatus to update in case it exists.
     */
    where: TypingStatusWhereUniqueInput
    /**
     * In case the TypingStatus found by the `where` argument doesn't exist, create a new TypingStatus with this data.
     */
    create: XOR<TypingStatusCreateInput, TypingStatusUncheckedCreateInput>
    /**
     * In case the TypingStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypingStatusUpdateInput, TypingStatusUncheckedUpdateInput>
  }

  /**
   * TypingStatus delete
   */
  export type TypingStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypingStatus
     */
    select?: TypingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypingStatus
     */
    omit?: TypingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypingStatusInclude<ExtArgs> | null
    /**
     * Filter which TypingStatus to delete.
     */
    where: TypingStatusWhereUniqueInput
  }

  /**
   * TypingStatus deleteMany
   */
  export type TypingStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypingStatuses to delete
     */
    where?: TypingStatusWhereInput
    /**
     * Limit how many TypingStatuses to delete.
     */
    limit?: number
  }

  /**
   * TypingStatus without action
   */
  export type TypingStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypingStatus
     */
    select?: TypingStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypingStatus
     */
    omit?: TypingStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypingStatusInclude<ExtArgs> | null
  }


  /**
   * Model ReadReceipt
   */

  export type AggregateReadReceipt = {
    _count: ReadReceiptCountAggregateOutputType | null
    _min: ReadReceiptMinAggregateOutputType | null
    _max: ReadReceiptMaxAggregateOutputType | null
  }

  export type ReadReceiptMinAggregateOutputType = {
    message_id: string | null
    user_id: string | null
    read_at: Date | null
  }

  export type ReadReceiptMaxAggregateOutputType = {
    message_id: string | null
    user_id: string | null
    read_at: Date | null
  }

  export type ReadReceiptCountAggregateOutputType = {
    message_id: number
    user_id: number
    read_at: number
    _all: number
  }


  export type ReadReceiptMinAggregateInputType = {
    message_id?: true
    user_id?: true
    read_at?: true
  }

  export type ReadReceiptMaxAggregateInputType = {
    message_id?: true
    user_id?: true
    read_at?: true
  }

  export type ReadReceiptCountAggregateInputType = {
    message_id?: true
    user_id?: true
    read_at?: true
    _all?: true
  }

  export type ReadReceiptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReadReceipt to aggregate.
     */
    where?: ReadReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadReceipts to fetch.
     */
    orderBy?: ReadReceiptOrderByWithRelationInput | ReadReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReadReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReadReceipts
    **/
    _count?: true | ReadReceiptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReadReceiptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReadReceiptMaxAggregateInputType
  }

  export type GetReadReceiptAggregateType<T extends ReadReceiptAggregateArgs> = {
        [P in keyof T & keyof AggregateReadReceipt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReadReceipt[P]>
      : GetScalarType<T[P], AggregateReadReceipt[P]>
  }




  export type ReadReceiptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadReceiptWhereInput
    orderBy?: ReadReceiptOrderByWithAggregationInput | ReadReceiptOrderByWithAggregationInput[]
    by: ReadReceiptScalarFieldEnum[] | ReadReceiptScalarFieldEnum
    having?: ReadReceiptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReadReceiptCountAggregateInputType | true
    _min?: ReadReceiptMinAggregateInputType
    _max?: ReadReceiptMaxAggregateInputType
  }

  export type ReadReceiptGroupByOutputType = {
    message_id: string
    user_id: string
    read_at: Date | null
    _count: ReadReceiptCountAggregateOutputType | null
    _min: ReadReceiptMinAggregateOutputType | null
    _max: ReadReceiptMaxAggregateOutputType | null
  }

  type GetReadReceiptGroupByPayload<T extends ReadReceiptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReadReceiptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReadReceiptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReadReceiptGroupByOutputType[P]>
            : GetScalarType<T[P], ReadReceiptGroupByOutputType[P]>
        }
      >
    >


  export type ReadReceiptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    message_id?: boolean
    user_id?: boolean
    read_at?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["readReceipt"]>

  export type ReadReceiptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    message_id?: boolean
    user_id?: boolean
    read_at?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["readReceipt"]>

  export type ReadReceiptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    message_id?: boolean
    user_id?: boolean
    read_at?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["readReceipt"]>

  export type ReadReceiptSelectScalar = {
    message_id?: boolean
    user_id?: boolean
    read_at?: boolean
  }

  export type ReadReceiptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"message_id" | "user_id" | "read_at", ExtArgs["result"]["readReceipt"]>
  export type ReadReceiptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ReadReceiptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ReadReceiptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ReadReceiptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReadReceipt"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      message_id: string
      user_id: string
      read_at: Date | null
    }, ExtArgs["result"]["readReceipt"]>
    composites: {}
  }

  type ReadReceiptGetPayload<S extends boolean | null | undefined | ReadReceiptDefaultArgs> = $Result.GetResult<Prisma.$ReadReceiptPayload, S>

  type ReadReceiptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReadReceiptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReadReceiptCountAggregateInputType | true
    }

  export interface ReadReceiptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReadReceipt'], meta: { name: 'ReadReceipt' } }
    /**
     * Find zero or one ReadReceipt that matches the filter.
     * @param {ReadReceiptFindUniqueArgs} args - Arguments to find a ReadReceipt
     * @example
     * // Get one ReadReceipt
     * const readReceipt = await prisma.readReceipt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReadReceiptFindUniqueArgs>(args: SelectSubset<T, ReadReceiptFindUniqueArgs<ExtArgs>>): Prisma__ReadReceiptClient<$Result.GetResult<Prisma.$ReadReceiptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReadReceipt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReadReceiptFindUniqueOrThrowArgs} args - Arguments to find a ReadReceipt
     * @example
     * // Get one ReadReceipt
     * const readReceipt = await prisma.readReceipt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReadReceiptFindUniqueOrThrowArgs>(args: SelectSubset<T, ReadReceiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReadReceiptClient<$Result.GetResult<Prisma.$ReadReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReadReceipt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadReceiptFindFirstArgs} args - Arguments to find a ReadReceipt
     * @example
     * // Get one ReadReceipt
     * const readReceipt = await prisma.readReceipt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReadReceiptFindFirstArgs>(args?: SelectSubset<T, ReadReceiptFindFirstArgs<ExtArgs>>): Prisma__ReadReceiptClient<$Result.GetResult<Prisma.$ReadReceiptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReadReceipt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadReceiptFindFirstOrThrowArgs} args - Arguments to find a ReadReceipt
     * @example
     * // Get one ReadReceipt
     * const readReceipt = await prisma.readReceipt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReadReceiptFindFirstOrThrowArgs>(args?: SelectSubset<T, ReadReceiptFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReadReceiptClient<$Result.GetResult<Prisma.$ReadReceiptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReadReceipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadReceiptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReadReceipts
     * const readReceipts = await prisma.readReceipt.findMany()
     * 
     * // Get first 10 ReadReceipts
     * const readReceipts = await prisma.readReceipt.findMany({ take: 10 })
     * 
     * // Only select the `message_id`
     * const readReceiptWithMessage_idOnly = await prisma.readReceipt.findMany({ select: { message_id: true } })
     * 
     */
    findMany<T extends ReadReceiptFindManyArgs>(args?: SelectSubset<T, ReadReceiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReadReceipt.
     * @param {ReadReceiptCreateArgs} args - Arguments to create a ReadReceipt.
     * @example
     * // Create one ReadReceipt
     * const ReadReceipt = await prisma.readReceipt.create({
     *   data: {
     *     // ... data to create a ReadReceipt
     *   }
     * })
     * 
     */
    create<T extends ReadReceiptCreateArgs>(args: SelectSubset<T, ReadReceiptCreateArgs<ExtArgs>>): Prisma__ReadReceiptClient<$Result.GetResult<Prisma.$ReadReceiptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReadReceipts.
     * @param {ReadReceiptCreateManyArgs} args - Arguments to create many ReadReceipts.
     * @example
     * // Create many ReadReceipts
     * const readReceipt = await prisma.readReceipt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReadReceiptCreateManyArgs>(args?: SelectSubset<T, ReadReceiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReadReceipts and returns the data saved in the database.
     * @param {ReadReceiptCreateManyAndReturnArgs} args - Arguments to create many ReadReceipts.
     * @example
     * // Create many ReadReceipts
     * const readReceipt = await prisma.readReceipt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReadReceipts and only return the `message_id`
     * const readReceiptWithMessage_idOnly = await prisma.readReceipt.createManyAndReturn({
     *   select: { message_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReadReceiptCreateManyAndReturnArgs>(args?: SelectSubset<T, ReadReceiptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadReceiptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReadReceipt.
     * @param {ReadReceiptDeleteArgs} args - Arguments to delete one ReadReceipt.
     * @example
     * // Delete one ReadReceipt
     * const ReadReceipt = await prisma.readReceipt.delete({
     *   where: {
     *     // ... filter to delete one ReadReceipt
     *   }
     * })
     * 
     */
    delete<T extends ReadReceiptDeleteArgs>(args: SelectSubset<T, ReadReceiptDeleteArgs<ExtArgs>>): Prisma__ReadReceiptClient<$Result.GetResult<Prisma.$ReadReceiptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReadReceipt.
     * @param {ReadReceiptUpdateArgs} args - Arguments to update one ReadReceipt.
     * @example
     * // Update one ReadReceipt
     * const readReceipt = await prisma.readReceipt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReadReceiptUpdateArgs>(args: SelectSubset<T, ReadReceiptUpdateArgs<ExtArgs>>): Prisma__ReadReceiptClient<$Result.GetResult<Prisma.$ReadReceiptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReadReceipts.
     * @param {ReadReceiptDeleteManyArgs} args - Arguments to filter ReadReceipts to delete.
     * @example
     * // Delete a few ReadReceipts
     * const { count } = await prisma.readReceipt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReadReceiptDeleteManyArgs>(args?: SelectSubset<T, ReadReceiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReadReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadReceiptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReadReceipts
     * const readReceipt = await prisma.readReceipt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReadReceiptUpdateManyArgs>(args: SelectSubset<T, ReadReceiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReadReceipts and returns the data updated in the database.
     * @param {ReadReceiptUpdateManyAndReturnArgs} args - Arguments to update many ReadReceipts.
     * @example
     * // Update many ReadReceipts
     * const readReceipt = await prisma.readReceipt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReadReceipts and only return the `message_id`
     * const readReceiptWithMessage_idOnly = await prisma.readReceipt.updateManyAndReturn({
     *   select: { message_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReadReceiptUpdateManyAndReturnArgs>(args: SelectSubset<T, ReadReceiptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadReceiptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReadReceipt.
     * @param {ReadReceiptUpsertArgs} args - Arguments to update or create a ReadReceipt.
     * @example
     * // Update or create a ReadReceipt
     * const readReceipt = await prisma.readReceipt.upsert({
     *   create: {
     *     // ... data to create a ReadReceipt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReadReceipt we want to update
     *   }
     * })
     */
    upsert<T extends ReadReceiptUpsertArgs>(args: SelectSubset<T, ReadReceiptUpsertArgs<ExtArgs>>): Prisma__ReadReceiptClient<$Result.GetResult<Prisma.$ReadReceiptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReadReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadReceiptCountArgs} args - Arguments to filter ReadReceipts to count.
     * @example
     * // Count the number of ReadReceipts
     * const count = await prisma.readReceipt.count({
     *   where: {
     *     // ... the filter for the ReadReceipts we want to count
     *   }
     * })
    **/
    count<T extends ReadReceiptCountArgs>(
      args?: Subset<T, ReadReceiptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReadReceiptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReadReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadReceiptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReadReceiptAggregateArgs>(args: Subset<T, ReadReceiptAggregateArgs>): Prisma.PrismaPromise<GetReadReceiptAggregateType<T>>

    /**
     * Group by ReadReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadReceiptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReadReceiptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReadReceiptGroupByArgs['orderBy'] }
        : { orderBy?: ReadReceiptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReadReceiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReadReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReadReceipt model
   */
  readonly fields: ReadReceiptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReadReceipt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReadReceiptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReadReceipt model
   */
  interface ReadReceiptFieldRefs {
    readonly message_id: FieldRef<"ReadReceipt", 'String'>
    readonly user_id: FieldRef<"ReadReceipt", 'String'>
    readonly read_at: FieldRef<"ReadReceipt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReadReceipt findUnique
   */
  export type ReadReceiptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadReceipt
     */
    select?: ReadReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadReceipt
     */
    omit?: ReadReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadReceiptInclude<ExtArgs> | null
    /**
     * Filter, which ReadReceipt to fetch.
     */
    where: ReadReceiptWhereUniqueInput
  }

  /**
   * ReadReceipt findUniqueOrThrow
   */
  export type ReadReceiptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadReceipt
     */
    select?: ReadReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadReceipt
     */
    omit?: ReadReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadReceiptInclude<ExtArgs> | null
    /**
     * Filter, which ReadReceipt to fetch.
     */
    where: ReadReceiptWhereUniqueInput
  }

  /**
   * ReadReceipt findFirst
   */
  export type ReadReceiptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadReceipt
     */
    select?: ReadReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadReceipt
     */
    omit?: ReadReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadReceiptInclude<ExtArgs> | null
    /**
     * Filter, which ReadReceipt to fetch.
     */
    where?: ReadReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadReceipts to fetch.
     */
    orderBy?: ReadReceiptOrderByWithRelationInput | ReadReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReadReceipts.
     */
    cursor?: ReadReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReadReceipts.
     */
    distinct?: ReadReceiptScalarFieldEnum | ReadReceiptScalarFieldEnum[]
  }

  /**
   * ReadReceipt findFirstOrThrow
   */
  export type ReadReceiptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadReceipt
     */
    select?: ReadReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadReceipt
     */
    omit?: ReadReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadReceiptInclude<ExtArgs> | null
    /**
     * Filter, which ReadReceipt to fetch.
     */
    where?: ReadReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadReceipts to fetch.
     */
    orderBy?: ReadReceiptOrderByWithRelationInput | ReadReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReadReceipts.
     */
    cursor?: ReadReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReadReceipts.
     */
    distinct?: ReadReceiptScalarFieldEnum | ReadReceiptScalarFieldEnum[]
  }

  /**
   * ReadReceipt findMany
   */
  export type ReadReceiptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadReceipt
     */
    select?: ReadReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadReceipt
     */
    omit?: ReadReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadReceiptInclude<ExtArgs> | null
    /**
     * Filter, which ReadReceipts to fetch.
     */
    where?: ReadReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadReceipts to fetch.
     */
    orderBy?: ReadReceiptOrderByWithRelationInput | ReadReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReadReceipts.
     */
    cursor?: ReadReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadReceipts.
     */
    skip?: number
    distinct?: ReadReceiptScalarFieldEnum | ReadReceiptScalarFieldEnum[]
  }

  /**
   * ReadReceipt create
   */
  export type ReadReceiptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadReceipt
     */
    select?: ReadReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadReceipt
     */
    omit?: ReadReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadReceiptInclude<ExtArgs> | null
    /**
     * The data needed to create a ReadReceipt.
     */
    data: XOR<ReadReceiptCreateInput, ReadReceiptUncheckedCreateInput>
  }

  /**
   * ReadReceipt createMany
   */
  export type ReadReceiptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReadReceipts.
     */
    data: ReadReceiptCreateManyInput | ReadReceiptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReadReceipt createManyAndReturn
   */
  export type ReadReceiptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadReceipt
     */
    select?: ReadReceiptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReadReceipt
     */
    omit?: ReadReceiptOmit<ExtArgs> | null
    /**
     * The data used to create many ReadReceipts.
     */
    data: ReadReceiptCreateManyInput | ReadReceiptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadReceiptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReadReceipt update
   */
  export type ReadReceiptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadReceipt
     */
    select?: ReadReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadReceipt
     */
    omit?: ReadReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadReceiptInclude<ExtArgs> | null
    /**
     * The data needed to update a ReadReceipt.
     */
    data: XOR<ReadReceiptUpdateInput, ReadReceiptUncheckedUpdateInput>
    /**
     * Choose, which ReadReceipt to update.
     */
    where: ReadReceiptWhereUniqueInput
  }

  /**
   * ReadReceipt updateMany
   */
  export type ReadReceiptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReadReceipts.
     */
    data: XOR<ReadReceiptUpdateManyMutationInput, ReadReceiptUncheckedUpdateManyInput>
    /**
     * Filter which ReadReceipts to update
     */
    where?: ReadReceiptWhereInput
    /**
     * Limit how many ReadReceipts to update.
     */
    limit?: number
  }

  /**
   * ReadReceipt updateManyAndReturn
   */
  export type ReadReceiptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadReceipt
     */
    select?: ReadReceiptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReadReceipt
     */
    omit?: ReadReceiptOmit<ExtArgs> | null
    /**
     * The data used to update ReadReceipts.
     */
    data: XOR<ReadReceiptUpdateManyMutationInput, ReadReceiptUncheckedUpdateManyInput>
    /**
     * Filter which ReadReceipts to update
     */
    where?: ReadReceiptWhereInput
    /**
     * Limit how many ReadReceipts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadReceiptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReadReceipt upsert
   */
  export type ReadReceiptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadReceipt
     */
    select?: ReadReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadReceipt
     */
    omit?: ReadReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadReceiptInclude<ExtArgs> | null
    /**
     * The filter to search for the ReadReceipt to update in case it exists.
     */
    where: ReadReceiptWhereUniqueInput
    /**
     * In case the ReadReceipt found by the `where` argument doesn't exist, create a new ReadReceipt with this data.
     */
    create: XOR<ReadReceiptCreateInput, ReadReceiptUncheckedCreateInput>
    /**
     * In case the ReadReceipt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReadReceiptUpdateInput, ReadReceiptUncheckedUpdateInput>
  }

  /**
   * ReadReceipt delete
   */
  export type ReadReceiptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadReceipt
     */
    select?: ReadReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadReceipt
     */
    omit?: ReadReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadReceiptInclude<ExtArgs> | null
    /**
     * Filter which ReadReceipt to delete.
     */
    where: ReadReceiptWhereUniqueInput
  }

  /**
   * ReadReceipt deleteMany
   */
  export type ReadReceiptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReadReceipts to delete
     */
    where?: ReadReceiptWhereInput
    /**
     * Limit how many ReadReceipts to delete.
     */
    limit?: number
  }

  /**
   * ReadReceipt without action
   */
  export type ReadReceiptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadReceipt
     */
    select?: ReadReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadReceipt
     */
    omit?: ReadReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadReceiptInclude<ExtArgs> | null
  }


  /**
   * Model VideoCallRoom
   */

  export type AggregateVideoCallRoom = {
    _count: VideoCallRoomCountAggregateOutputType | null
    _min: VideoCallRoomMinAggregateOutputType | null
    _max: VideoCallRoomMaxAggregateOutputType | null
  }

  export type VideoCallRoomMinAggregateOutputType = {
    id: string | null
    room_code: string | null
    token: string | null
    host_id: string | null
    created_at: Date | null
  }

  export type VideoCallRoomMaxAggregateOutputType = {
    id: string | null
    room_code: string | null
    token: string | null
    host_id: string | null
    created_at: Date | null
  }

  export type VideoCallRoomCountAggregateOutputType = {
    id: number
    room_code: number
    token: number
    host_id: number
    created_at: number
    _all: number
  }


  export type VideoCallRoomMinAggregateInputType = {
    id?: true
    room_code?: true
    token?: true
    host_id?: true
    created_at?: true
  }

  export type VideoCallRoomMaxAggregateInputType = {
    id?: true
    room_code?: true
    token?: true
    host_id?: true
    created_at?: true
  }

  export type VideoCallRoomCountAggregateInputType = {
    id?: true
    room_code?: true
    token?: true
    host_id?: true
    created_at?: true
    _all?: true
  }

  export type VideoCallRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoCallRoom to aggregate.
     */
    where?: VideoCallRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoCallRooms to fetch.
     */
    orderBy?: VideoCallRoomOrderByWithRelationInput | VideoCallRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoCallRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoCallRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoCallRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoCallRooms
    **/
    _count?: true | VideoCallRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoCallRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoCallRoomMaxAggregateInputType
  }

  export type GetVideoCallRoomAggregateType<T extends VideoCallRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoCallRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoCallRoom[P]>
      : GetScalarType<T[P], AggregateVideoCallRoom[P]>
  }




  export type VideoCallRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoCallRoomWhereInput
    orderBy?: VideoCallRoomOrderByWithAggregationInput | VideoCallRoomOrderByWithAggregationInput[]
    by: VideoCallRoomScalarFieldEnum[] | VideoCallRoomScalarFieldEnum
    having?: VideoCallRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCallRoomCountAggregateInputType | true
    _min?: VideoCallRoomMinAggregateInputType
    _max?: VideoCallRoomMaxAggregateInputType
  }

  export type VideoCallRoomGroupByOutputType = {
    id: string
    room_code: string
    token: string
    host_id: string
    created_at: Date
    _count: VideoCallRoomCountAggregateOutputType | null
    _min: VideoCallRoomMinAggregateOutputType | null
    _max: VideoCallRoomMaxAggregateOutputType | null
  }

  type GetVideoCallRoomGroupByPayload<T extends VideoCallRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoCallRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoCallRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoCallRoomGroupByOutputType[P]>
            : GetScalarType<T[P], VideoCallRoomGroupByOutputType[P]>
        }
      >
    >


  export type VideoCallRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_code?: boolean
    token?: boolean
    host_id?: boolean
    created_at?: boolean
    host?: boolean | UsersDefaultArgs<ExtArgs>
    participants?: boolean | VideoCallRoom$participantsArgs<ExtArgs>
    _count?: boolean | VideoCallRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoCallRoom"]>

  export type VideoCallRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_code?: boolean
    token?: boolean
    host_id?: boolean
    created_at?: boolean
    host?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoCallRoom"]>

  export type VideoCallRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_code?: boolean
    token?: boolean
    host_id?: boolean
    created_at?: boolean
    host?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoCallRoom"]>

  export type VideoCallRoomSelectScalar = {
    id?: boolean
    room_code?: boolean
    token?: boolean
    host_id?: boolean
    created_at?: boolean
  }

  export type VideoCallRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "room_code" | "token" | "host_id" | "created_at", ExtArgs["result"]["videoCallRoom"]>
  export type VideoCallRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UsersDefaultArgs<ExtArgs>
    participants?: boolean | VideoCallRoom$participantsArgs<ExtArgs>
    _count?: boolean | VideoCallRoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VideoCallRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type VideoCallRoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $VideoCallRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoCallRoom"
    objects: {
      host: Prisma.$UsersPayload<ExtArgs>
      participants: Prisma.$VideoCallParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      room_code: string
      token: string
      host_id: string
      created_at: Date
    }, ExtArgs["result"]["videoCallRoom"]>
    composites: {}
  }

  type VideoCallRoomGetPayload<S extends boolean | null | undefined | VideoCallRoomDefaultArgs> = $Result.GetResult<Prisma.$VideoCallRoomPayload, S>

  type VideoCallRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoCallRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCallRoomCountAggregateInputType | true
    }

  export interface VideoCallRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoCallRoom'], meta: { name: 'VideoCallRoom' } }
    /**
     * Find zero or one VideoCallRoom that matches the filter.
     * @param {VideoCallRoomFindUniqueArgs} args - Arguments to find a VideoCallRoom
     * @example
     * // Get one VideoCallRoom
     * const videoCallRoom = await prisma.videoCallRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoCallRoomFindUniqueArgs>(args: SelectSubset<T, VideoCallRoomFindUniqueArgs<ExtArgs>>): Prisma__VideoCallRoomClient<$Result.GetResult<Prisma.$VideoCallRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoCallRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoCallRoomFindUniqueOrThrowArgs} args - Arguments to find a VideoCallRoom
     * @example
     * // Get one VideoCallRoom
     * const videoCallRoom = await prisma.videoCallRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoCallRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoCallRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoCallRoomClient<$Result.GetResult<Prisma.$VideoCallRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoCallRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallRoomFindFirstArgs} args - Arguments to find a VideoCallRoom
     * @example
     * // Get one VideoCallRoom
     * const videoCallRoom = await prisma.videoCallRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoCallRoomFindFirstArgs>(args?: SelectSubset<T, VideoCallRoomFindFirstArgs<ExtArgs>>): Prisma__VideoCallRoomClient<$Result.GetResult<Prisma.$VideoCallRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoCallRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallRoomFindFirstOrThrowArgs} args - Arguments to find a VideoCallRoom
     * @example
     * // Get one VideoCallRoom
     * const videoCallRoom = await prisma.videoCallRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoCallRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoCallRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoCallRoomClient<$Result.GetResult<Prisma.$VideoCallRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoCallRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoCallRooms
     * const videoCallRooms = await prisma.videoCallRoom.findMany()
     * 
     * // Get first 10 VideoCallRooms
     * const videoCallRooms = await prisma.videoCallRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoCallRoomWithIdOnly = await prisma.videoCallRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoCallRoomFindManyArgs>(args?: SelectSubset<T, VideoCallRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoCallRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoCallRoom.
     * @param {VideoCallRoomCreateArgs} args - Arguments to create a VideoCallRoom.
     * @example
     * // Create one VideoCallRoom
     * const VideoCallRoom = await prisma.videoCallRoom.create({
     *   data: {
     *     // ... data to create a VideoCallRoom
     *   }
     * })
     * 
     */
    create<T extends VideoCallRoomCreateArgs>(args: SelectSubset<T, VideoCallRoomCreateArgs<ExtArgs>>): Prisma__VideoCallRoomClient<$Result.GetResult<Prisma.$VideoCallRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoCallRooms.
     * @param {VideoCallRoomCreateManyArgs} args - Arguments to create many VideoCallRooms.
     * @example
     * // Create many VideoCallRooms
     * const videoCallRoom = await prisma.videoCallRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCallRoomCreateManyArgs>(args?: SelectSubset<T, VideoCallRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoCallRooms and returns the data saved in the database.
     * @param {VideoCallRoomCreateManyAndReturnArgs} args - Arguments to create many VideoCallRooms.
     * @example
     * // Create many VideoCallRooms
     * const videoCallRoom = await prisma.videoCallRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoCallRooms and only return the `id`
     * const videoCallRoomWithIdOnly = await prisma.videoCallRoom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCallRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCallRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoCallRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoCallRoom.
     * @param {VideoCallRoomDeleteArgs} args - Arguments to delete one VideoCallRoom.
     * @example
     * // Delete one VideoCallRoom
     * const VideoCallRoom = await prisma.videoCallRoom.delete({
     *   where: {
     *     // ... filter to delete one VideoCallRoom
     *   }
     * })
     * 
     */
    delete<T extends VideoCallRoomDeleteArgs>(args: SelectSubset<T, VideoCallRoomDeleteArgs<ExtArgs>>): Prisma__VideoCallRoomClient<$Result.GetResult<Prisma.$VideoCallRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoCallRoom.
     * @param {VideoCallRoomUpdateArgs} args - Arguments to update one VideoCallRoom.
     * @example
     * // Update one VideoCallRoom
     * const videoCallRoom = await prisma.videoCallRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoCallRoomUpdateArgs>(args: SelectSubset<T, VideoCallRoomUpdateArgs<ExtArgs>>): Prisma__VideoCallRoomClient<$Result.GetResult<Prisma.$VideoCallRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoCallRooms.
     * @param {VideoCallRoomDeleteManyArgs} args - Arguments to filter VideoCallRooms to delete.
     * @example
     * // Delete a few VideoCallRooms
     * const { count } = await prisma.videoCallRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoCallRoomDeleteManyArgs>(args?: SelectSubset<T, VideoCallRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoCallRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoCallRooms
     * const videoCallRoom = await prisma.videoCallRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoCallRoomUpdateManyArgs>(args: SelectSubset<T, VideoCallRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoCallRooms and returns the data updated in the database.
     * @param {VideoCallRoomUpdateManyAndReturnArgs} args - Arguments to update many VideoCallRooms.
     * @example
     * // Update many VideoCallRooms
     * const videoCallRoom = await prisma.videoCallRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoCallRooms and only return the `id`
     * const videoCallRoomWithIdOnly = await prisma.videoCallRoom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VideoCallRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoCallRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoCallRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoCallRoom.
     * @param {VideoCallRoomUpsertArgs} args - Arguments to update or create a VideoCallRoom.
     * @example
     * // Update or create a VideoCallRoom
     * const videoCallRoom = await prisma.videoCallRoom.upsert({
     *   create: {
     *     // ... data to create a VideoCallRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoCallRoom we want to update
     *   }
     * })
     */
    upsert<T extends VideoCallRoomUpsertArgs>(args: SelectSubset<T, VideoCallRoomUpsertArgs<ExtArgs>>): Prisma__VideoCallRoomClient<$Result.GetResult<Prisma.$VideoCallRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoCallRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallRoomCountArgs} args - Arguments to filter VideoCallRooms to count.
     * @example
     * // Count the number of VideoCallRooms
     * const count = await prisma.videoCallRoom.count({
     *   where: {
     *     // ... the filter for the VideoCallRooms we want to count
     *   }
     * })
    **/
    count<T extends VideoCallRoomCountArgs>(
      args?: Subset<T, VideoCallRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCallRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoCallRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoCallRoomAggregateArgs>(args: Subset<T, VideoCallRoomAggregateArgs>): Prisma.PrismaPromise<GetVideoCallRoomAggregateType<T>>

    /**
     * Group by VideoCallRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoCallRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoCallRoomGroupByArgs['orderBy'] }
        : { orderBy?: VideoCallRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoCallRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoCallRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoCallRoom model
   */
  readonly fields: VideoCallRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoCallRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoCallRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    host<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends VideoCallRoom$participantsArgs<ExtArgs> = {}>(args?: Subset<T, VideoCallRoom$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoCallParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VideoCallRoom model
   */
  interface VideoCallRoomFieldRefs {
    readonly id: FieldRef<"VideoCallRoom", 'String'>
    readonly room_code: FieldRef<"VideoCallRoom", 'String'>
    readonly token: FieldRef<"VideoCallRoom", 'String'>
    readonly host_id: FieldRef<"VideoCallRoom", 'String'>
    readonly created_at: FieldRef<"VideoCallRoom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VideoCallRoom findUnique
   */
  export type VideoCallRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallRoom
     */
    select?: VideoCallRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallRoom
     */
    omit?: VideoCallRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallRoomInclude<ExtArgs> | null
    /**
     * Filter, which VideoCallRoom to fetch.
     */
    where: VideoCallRoomWhereUniqueInput
  }

  /**
   * VideoCallRoom findUniqueOrThrow
   */
  export type VideoCallRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallRoom
     */
    select?: VideoCallRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallRoom
     */
    omit?: VideoCallRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallRoomInclude<ExtArgs> | null
    /**
     * Filter, which VideoCallRoom to fetch.
     */
    where: VideoCallRoomWhereUniqueInput
  }

  /**
   * VideoCallRoom findFirst
   */
  export type VideoCallRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallRoom
     */
    select?: VideoCallRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallRoom
     */
    omit?: VideoCallRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallRoomInclude<ExtArgs> | null
    /**
     * Filter, which VideoCallRoom to fetch.
     */
    where?: VideoCallRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoCallRooms to fetch.
     */
    orderBy?: VideoCallRoomOrderByWithRelationInput | VideoCallRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoCallRooms.
     */
    cursor?: VideoCallRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoCallRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoCallRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoCallRooms.
     */
    distinct?: VideoCallRoomScalarFieldEnum | VideoCallRoomScalarFieldEnum[]
  }

  /**
   * VideoCallRoom findFirstOrThrow
   */
  export type VideoCallRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallRoom
     */
    select?: VideoCallRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallRoom
     */
    omit?: VideoCallRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallRoomInclude<ExtArgs> | null
    /**
     * Filter, which VideoCallRoom to fetch.
     */
    where?: VideoCallRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoCallRooms to fetch.
     */
    orderBy?: VideoCallRoomOrderByWithRelationInput | VideoCallRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoCallRooms.
     */
    cursor?: VideoCallRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoCallRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoCallRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoCallRooms.
     */
    distinct?: VideoCallRoomScalarFieldEnum | VideoCallRoomScalarFieldEnum[]
  }

  /**
   * VideoCallRoom findMany
   */
  export type VideoCallRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallRoom
     */
    select?: VideoCallRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallRoom
     */
    omit?: VideoCallRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallRoomInclude<ExtArgs> | null
    /**
     * Filter, which VideoCallRooms to fetch.
     */
    where?: VideoCallRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoCallRooms to fetch.
     */
    orderBy?: VideoCallRoomOrderByWithRelationInput | VideoCallRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoCallRooms.
     */
    cursor?: VideoCallRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoCallRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoCallRooms.
     */
    skip?: number
    distinct?: VideoCallRoomScalarFieldEnum | VideoCallRoomScalarFieldEnum[]
  }

  /**
   * VideoCallRoom create
   */
  export type VideoCallRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallRoom
     */
    select?: VideoCallRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallRoom
     */
    omit?: VideoCallRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoCallRoom.
     */
    data: XOR<VideoCallRoomCreateInput, VideoCallRoomUncheckedCreateInput>
  }

  /**
   * VideoCallRoom createMany
   */
  export type VideoCallRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoCallRooms.
     */
    data: VideoCallRoomCreateManyInput | VideoCallRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoCallRoom createManyAndReturn
   */
  export type VideoCallRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallRoom
     */
    select?: VideoCallRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallRoom
     */
    omit?: VideoCallRoomOmit<ExtArgs> | null
    /**
     * The data used to create many VideoCallRooms.
     */
    data: VideoCallRoomCreateManyInput | VideoCallRoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallRoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoCallRoom update
   */
  export type VideoCallRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallRoom
     */
    select?: VideoCallRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallRoom
     */
    omit?: VideoCallRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoCallRoom.
     */
    data: XOR<VideoCallRoomUpdateInput, VideoCallRoomUncheckedUpdateInput>
    /**
     * Choose, which VideoCallRoom to update.
     */
    where: VideoCallRoomWhereUniqueInput
  }

  /**
   * VideoCallRoom updateMany
   */
  export type VideoCallRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoCallRooms.
     */
    data: XOR<VideoCallRoomUpdateManyMutationInput, VideoCallRoomUncheckedUpdateManyInput>
    /**
     * Filter which VideoCallRooms to update
     */
    where?: VideoCallRoomWhereInput
    /**
     * Limit how many VideoCallRooms to update.
     */
    limit?: number
  }

  /**
   * VideoCallRoom updateManyAndReturn
   */
  export type VideoCallRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallRoom
     */
    select?: VideoCallRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallRoom
     */
    omit?: VideoCallRoomOmit<ExtArgs> | null
    /**
     * The data used to update VideoCallRooms.
     */
    data: XOR<VideoCallRoomUpdateManyMutationInput, VideoCallRoomUncheckedUpdateManyInput>
    /**
     * Filter which VideoCallRooms to update
     */
    where?: VideoCallRoomWhereInput
    /**
     * Limit how many VideoCallRooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallRoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoCallRoom upsert
   */
  export type VideoCallRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallRoom
     */
    select?: VideoCallRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallRoom
     */
    omit?: VideoCallRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoCallRoom to update in case it exists.
     */
    where: VideoCallRoomWhereUniqueInput
    /**
     * In case the VideoCallRoom found by the `where` argument doesn't exist, create a new VideoCallRoom with this data.
     */
    create: XOR<VideoCallRoomCreateInput, VideoCallRoomUncheckedCreateInput>
    /**
     * In case the VideoCallRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoCallRoomUpdateInput, VideoCallRoomUncheckedUpdateInput>
  }

  /**
   * VideoCallRoom delete
   */
  export type VideoCallRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallRoom
     */
    select?: VideoCallRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallRoom
     */
    omit?: VideoCallRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallRoomInclude<ExtArgs> | null
    /**
     * Filter which VideoCallRoom to delete.
     */
    where: VideoCallRoomWhereUniqueInput
  }

  /**
   * VideoCallRoom deleteMany
   */
  export type VideoCallRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoCallRooms to delete
     */
    where?: VideoCallRoomWhereInput
    /**
     * Limit how many VideoCallRooms to delete.
     */
    limit?: number
  }

  /**
   * VideoCallRoom.participants
   */
  export type VideoCallRoom$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallParticipant
     */
    select?: VideoCallParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallParticipant
     */
    omit?: VideoCallParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallParticipantInclude<ExtArgs> | null
    where?: VideoCallParticipantWhereInput
    orderBy?: VideoCallParticipantOrderByWithRelationInput | VideoCallParticipantOrderByWithRelationInput[]
    cursor?: VideoCallParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoCallParticipantScalarFieldEnum | VideoCallParticipantScalarFieldEnum[]
  }

  /**
   * VideoCallRoom without action
   */
  export type VideoCallRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallRoom
     */
    select?: VideoCallRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallRoom
     */
    omit?: VideoCallRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallRoomInclude<ExtArgs> | null
  }


  /**
   * Model VideoCallParticipant
   */

  export type AggregateVideoCallParticipant = {
    _count: VideoCallParticipantCountAggregateOutputType | null
    _min: VideoCallParticipantMinAggregateOutputType | null
    _max: VideoCallParticipantMaxAggregateOutputType | null
  }

  export type VideoCallParticipantMinAggregateOutputType = {
    id: string | null
    room_id: string | null
    user_id: string | null
    joined_at: Date | null
    left_at: Date | null
  }

  export type VideoCallParticipantMaxAggregateOutputType = {
    id: string | null
    room_id: string | null
    user_id: string | null
    joined_at: Date | null
    left_at: Date | null
  }

  export type VideoCallParticipantCountAggregateOutputType = {
    id: number
    room_id: number
    user_id: number
    joined_at: number
    left_at: number
    _all: number
  }


  export type VideoCallParticipantMinAggregateInputType = {
    id?: true
    room_id?: true
    user_id?: true
    joined_at?: true
    left_at?: true
  }

  export type VideoCallParticipantMaxAggregateInputType = {
    id?: true
    room_id?: true
    user_id?: true
    joined_at?: true
    left_at?: true
  }

  export type VideoCallParticipantCountAggregateInputType = {
    id?: true
    room_id?: true
    user_id?: true
    joined_at?: true
    left_at?: true
    _all?: true
  }

  export type VideoCallParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoCallParticipant to aggregate.
     */
    where?: VideoCallParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoCallParticipants to fetch.
     */
    orderBy?: VideoCallParticipantOrderByWithRelationInput | VideoCallParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoCallParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoCallParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoCallParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoCallParticipants
    **/
    _count?: true | VideoCallParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoCallParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoCallParticipantMaxAggregateInputType
  }

  export type GetVideoCallParticipantAggregateType<T extends VideoCallParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoCallParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoCallParticipant[P]>
      : GetScalarType<T[P], AggregateVideoCallParticipant[P]>
  }




  export type VideoCallParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoCallParticipantWhereInput
    orderBy?: VideoCallParticipantOrderByWithAggregationInput | VideoCallParticipantOrderByWithAggregationInput[]
    by: VideoCallParticipantScalarFieldEnum[] | VideoCallParticipantScalarFieldEnum
    having?: VideoCallParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCallParticipantCountAggregateInputType | true
    _min?: VideoCallParticipantMinAggregateInputType
    _max?: VideoCallParticipantMaxAggregateInputType
  }

  export type VideoCallParticipantGroupByOutputType = {
    id: string
    room_id: string
    user_id: string
    joined_at: Date
    left_at: Date | null
    _count: VideoCallParticipantCountAggregateOutputType | null
    _min: VideoCallParticipantMinAggregateOutputType | null
    _max: VideoCallParticipantMaxAggregateOutputType | null
  }

  type GetVideoCallParticipantGroupByPayload<T extends VideoCallParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoCallParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoCallParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoCallParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], VideoCallParticipantGroupByOutputType[P]>
        }
      >
    >


  export type VideoCallParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    user_id?: boolean
    joined_at?: boolean
    left_at?: boolean
    room?: boolean | VideoCallRoomDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoCallParticipant"]>

  export type VideoCallParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    user_id?: boolean
    joined_at?: boolean
    left_at?: boolean
    room?: boolean | VideoCallRoomDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoCallParticipant"]>

  export type VideoCallParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    user_id?: boolean
    joined_at?: boolean
    left_at?: boolean
    room?: boolean | VideoCallRoomDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoCallParticipant"]>

  export type VideoCallParticipantSelectScalar = {
    id?: boolean
    room_id?: boolean
    user_id?: boolean
    joined_at?: boolean
    left_at?: boolean
  }

  export type VideoCallParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "room_id" | "user_id" | "joined_at" | "left_at", ExtArgs["result"]["videoCallParticipant"]>
  export type VideoCallParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | VideoCallRoomDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type VideoCallParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | VideoCallRoomDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type VideoCallParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | VideoCallRoomDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $VideoCallParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoCallParticipant"
    objects: {
      room: Prisma.$VideoCallRoomPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      room_id: string
      user_id: string
      joined_at: Date
      left_at: Date | null
    }, ExtArgs["result"]["videoCallParticipant"]>
    composites: {}
  }

  type VideoCallParticipantGetPayload<S extends boolean | null | undefined | VideoCallParticipantDefaultArgs> = $Result.GetResult<Prisma.$VideoCallParticipantPayload, S>

  type VideoCallParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoCallParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCallParticipantCountAggregateInputType | true
    }

  export interface VideoCallParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoCallParticipant'], meta: { name: 'VideoCallParticipant' } }
    /**
     * Find zero or one VideoCallParticipant that matches the filter.
     * @param {VideoCallParticipantFindUniqueArgs} args - Arguments to find a VideoCallParticipant
     * @example
     * // Get one VideoCallParticipant
     * const videoCallParticipant = await prisma.videoCallParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoCallParticipantFindUniqueArgs>(args: SelectSubset<T, VideoCallParticipantFindUniqueArgs<ExtArgs>>): Prisma__VideoCallParticipantClient<$Result.GetResult<Prisma.$VideoCallParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoCallParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoCallParticipantFindUniqueOrThrowArgs} args - Arguments to find a VideoCallParticipant
     * @example
     * // Get one VideoCallParticipant
     * const videoCallParticipant = await prisma.videoCallParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoCallParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoCallParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoCallParticipantClient<$Result.GetResult<Prisma.$VideoCallParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoCallParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallParticipantFindFirstArgs} args - Arguments to find a VideoCallParticipant
     * @example
     * // Get one VideoCallParticipant
     * const videoCallParticipant = await prisma.videoCallParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoCallParticipantFindFirstArgs>(args?: SelectSubset<T, VideoCallParticipantFindFirstArgs<ExtArgs>>): Prisma__VideoCallParticipantClient<$Result.GetResult<Prisma.$VideoCallParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoCallParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallParticipantFindFirstOrThrowArgs} args - Arguments to find a VideoCallParticipant
     * @example
     * // Get one VideoCallParticipant
     * const videoCallParticipant = await prisma.videoCallParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoCallParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoCallParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoCallParticipantClient<$Result.GetResult<Prisma.$VideoCallParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoCallParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoCallParticipants
     * const videoCallParticipants = await prisma.videoCallParticipant.findMany()
     * 
     * // Get first 10 VideoCallParticipants
     * const videoCallParticipants = await prisma.videoCallParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoCallParticipantWithIdOnly = await prisma.videoCallParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoCallParticipantFindManyArgs>(args?: SelectSubset<T, VideoCallParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoCallParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoCallParticipant.
     * @param {VideoCallParticipantCreateArgs} args - Arguments to create a VideoCallParticipant.
     * @example
     * // Create one VideoCallParticipant
     * const VideoCallParticipant = await prisma.videoCallParticipant.create({
     *   data: {
     *     // ... data to create a VideoCallParticipant
     *   }
     * })
     * 
     */
    create<T extends VideoCallParticipantCreateArgs>(args: SelectSubset<T, VideoCallParticipantCreateArgs<ExtArgs>>): Prisma__VideoCallParticipantClient<$Result.GetResult<Prisma.$VideoCallParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoCallParticipants.
     * @param {VideoCallParticipantCreateManyArgs} args - Arguments to create many VideoCallParticipants.
     * @example
     * // Create many VideoCallParticipants
     * const videoCallParticipant = await prisma.videoCallParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCallParticipantCreateManyArgs>(args?: SelectSubset<T, VideoCallParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoCallParticipants and returns the data saved in the database.
     * @param {VideoCallParticipantCreateManyAndReturnArgs} args - Arguments to create many VideoCallParticipants.
     * @example
     * // Create many VideoCallParticipants
     * const videoCallParticipant = await prisma.videoCallParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoCallParticipants and only return the `id`
     * const videoCallParticipantWithIdOnly = await prisma.videoCallParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCallParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCallParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoCallParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoCallParticipant.
     * @param {VideoCallParticipantDeleteArgs} args - Arguments to delete one VideoCallParticipant.
     * @example
     * // Delete one VideoCallParticipant
     * const VideoCallParticipant = await prisma.videoCallParticipant.delete({
     *   where: {
     *     // ... filter to delete one VideoCallParticipant
     *   }
     * })
     * 
     */
    delete<T extends VideoCallParticipantDeleteArgs>(args: SelectSubset<T, VideoCallParticipantDeleteArgs<ExtArgs>>): Prisma__VideoCallParticipantClient<$Result.GetResult<Prisma.$VideoCallParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoCallParticipant.
     * @param {VideoCallParticipantUpdateArgs} args - Arguments to update one VideoCallParticipant.
     * @example
     * // Update one VideoCallParticipant
     * const videoCallParticipant = await prisma.videoCallParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoCallParticipantUpdateArgs>(args: SelectSubset<T, VideoCallParticipantUpdateArgs<ExtArgs>>): Prisma__VideoCallParticipantClient<$Result.GetResult<Prisma.$VideoCallParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoCallParticipants.
     * @param {VideoCallParticipantDeleteManyArgs} args - Arguments to filter VideoCallParticipants to delete.
     * @example
     * // Delete a few VideoCallParticipants
     * const { count } = await prisma.videoCallParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoCallParticipantDeleteManyArgs>(args?: SelectSubset<T, VideoCallParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoCallParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoCallParticipants
     * const videoCallParticipant = await prisma.videoCallParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoCallParticipantUpdateManyArgs>(args: SelectSubset<T, VideoCallParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoCallParticipants and returns the data updated in the database.
     * @param {VideoCallParticipantUpdateManyAndReturnArgs} args - Arguments to update many VideoCallParticipants.
     * @example
     * // Update many VideoCallParticipants
     * const videoCallParticipant = await prisma.videoCallParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoCallParticipants and only return the `id`
     * const videoCallParticipantWithIdOnly = await prisma.videoCallParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VideoCallParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoCallParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoCallParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoCallParticipant.
     * @param {VideoCallParticipantUpsertArgs} args - Arguments to update or create a VideoCallParticipant.
     * @example
     * // Update or create a VideoCallParticipant
     * const videoCallParticipant = await prisma.videoCallParticipant.upsert({
     *   create: {
     *     // ... data to create a VideoCallParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoCallParticipant we want to update
     *   }
     * })
     */
    upsert<T extends VideoCallParticipantUpsertArgs>(args: SelectSubset<T, VideoCallParticipantUpsertArgs<ExtArgs>>): Prisma__VideoCallParticipantClient<$Result.GetResult<Prisma.$VideoCallParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoCallParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallParticipantCountArgs} args - Arguments to filter VideoCallParticipants to count.
     * @example
     * // Count the number of VideoCallParticipants
     * const count = await prisma.videoCallParticipant.count({
     *   where: {
     *     // ... the filter for the VideoCallParticipants we want to count
     *   }
     * })
    **/
    count<T extends VideoCallParticipantCountArgs>(
      args?: Subset<T, VideoCallParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCallParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoCallParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoCallParticipantAggregateArgs>(args: Subset<T, VideoCallParticipantAggregateArgs>): Prisma.PrismaPromise<GetVideoCallParticipantAggregateType<T>>

    /**
     * Group by VideoCallParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoCallParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoCallParticipantGroupByArgs['orderBy'] }
        : { orderBy?: VideoCallParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoCallParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoCallParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoCallParticipant model
   */
  readonly fields: VideoCallParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoCallParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoCallParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends VideoCallRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoCallRoomDefaultArgs<ExtArgs>>): Prisma__VideoCallRoomClient<$Result.GetResult<Prisma.$VideoCallRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VideoCallParticipant model
   */
  interface VideoCallParticipantFieldRefs {
    readonly id: FieldRef<"VideoCallParticipant", 'String'>
    readonly room_id: FieldRef<"VideoCallParticipant", 'String'>
    readonly user_id: FieldRef<"VideoCallParticipant", 'String'>
    readonly joined_at: FieldRef<"VideoCallParticipant", 'DateTime'>
    readonly left_at: FieldRef<"VideoCallParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VideoCallParticipant findUnique
   */
  export type VideoCallParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallParticipant
     */
    select?: VideoCallParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallParticipant
     */
    omit?: VideoCallParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallParticipantInclude<ExtArgs> | null
    /**
     * Filter, which VideoCallParticipant to fetch.
     */
    where: VideoCallParticipantWhereUniqueInput
  }

  /**
   * VideoCallParticipant findUniqueOrThrow
   */
  export type VideoCallParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallParticipant
     */
    select?: VideoCallParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallParticipant
     */
    omit?: VideoCallParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallParticipantInclude<ExtArgs> | null
    /**
     * Filter, which VideoCallParticipant to fetch.
     */
    where: VideoCallParticipantWhereUniqueInput
  }

  /**
   * VideoCallParticipant findFirst
   */
  export type VideoCallParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallParticipant
     */
    select?: VideoCallParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallParticipant
     */
    omit?: VideoCallParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallParticipantInclude<ExtArgs> | null
    /**
     * Filter, which VideoCallParticipant to fetch.
     */
    where?: VideoCallParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoCallParticipants to fetch.
     */
    orderBy?: VideoCallParticipantOrderByWithRelationInput | VideoCallParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoCallParticipants.
     */
    cursor?: VideoCallParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoCallParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoCallParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoCallParticipants.
     */
    distinct?: VideoCallParticipantScalarFieldEnum | VideoCallParticipantScalarFieldEnum[]
  }

  /**
   * VideoCallParticipant findFirstOrThrow
   */
  export type VideoCallParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallParticipant
     */
    select?: VideoCallParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallParticipant
     */
    omit?: VideoCallParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallParticipantInclude<ExtArgs> | null
    /**
     * Filter, which VideoCallParticipant to fetch.
     */
    where?: VideoCallParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoCallParticipants to fetch.
     */
    orderBy?: VideoCallParticipantOrderByWithRelationInput | VideoCallParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoCallParticipants.
     */
    cursor?: VideoCallParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoCallParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoCallParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoCallParticipants.
     */
    distinct?: VideoCallParticipantScalarFieldEnum | VideoCallParticipantScalarFieldEnum[]
  }

  /**
   * VideoCallParticipant findMany
   */
  export type VideoCallParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallParticipant
     */
    select?: VideoCallParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallParticipant
     */
    omit?: VideoCallParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallParticipantInclude<ExtArgs> | null
    /**
     * Filter, which VideoCallParticipants to fetch.
     */
    where?: VideoCallParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoCallParticipants to fetch.
     */
    orderBy?: VideoCallParticipantOrderByWithRelationInput | VideoCallParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoCallParticipants.
     */
    cursor?: VideoCallParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoCallParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoCallParticipants.
     */
    skip?: number
    distinct?: VideoCallParticipantScalarFieldEnum | VideoCallParticipantScalarFieldEnum[]
  }

  /**
   * VideoCallParticipant create
   */
  export type VideoCallParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallParticipant
     */
    select?: VideoCallParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallParticipant
     */
    omit?: VideoCallParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoCallParticipant.
     */
    data: XOR<VideoCallParticipantCreateInput, VideoCallParticipantUncheckedCreateInput>
  }

  /**
   * VideoCallParticipant createMany
   */
  export type VideoCallParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoCallParticipants.
     */
    data: VideoCallParticipantCreateManyInput | VideoCallParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoCallParticipant createManyAndReturn
   */
  export type VideoCallParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallParticipant
     */
    select?: VideoCallParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallParticipant
     */
    omit?: VideoCallParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many VideoCallParticipants.
     */
    data: VideoCallParticipantCreateManyInput | VideoCallParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoCallParticipant update
   */
  export type VideoCallParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallParticipant
     */
    select?: VideoCallParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallParticipant
     */
    omit?: VideoCallParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoCallParticipant.
     */
    data: XOR<VideoCallParticipantUpdateInput, VideoCallParticipantUncheckedUpdateInput>
    /**
     * Choose, which VideoCallParticipant to update.
     */
    where: VideoCallParticipantWhereUniqueInput
  }

  /**
   * VideoCallParticipant updateMany
   */
  export type VideoCallParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoCallParticipants.
     */
    data: XOR<VideoCallParticipantUpdateManyMutationInput, VideoCallParticipantUncheckedUpdateManyInput>
    /**
     * Filter which VideoCallParticipants to update
     */
    where?: VideoCallParticipantWhereInput
    /**
     * Limit how many VideoCallParticipants to update.
     */
    limit?: number
  }

  /**
   * VideoCallParticipant updateManyAndReturn
   */
  export type VideoCallParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallParticipant
     */
    select?: VideoCallParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallParticipant
     */
    omit?: VideoCallParticipantOmit<ExtArgs> | null
    /**
     * The data used to update VideoCallParticipants.
     */
    data: XOR<VideoCallParticipantUpdateManyMutationInput, VideoCallParticipantUncheckedUpdateManyInput>
    /**
     * Filter which VideoCallParticipants to update
     */
    where?: VideoCallParticipantWhereInput
    /**
     * Limit how many VideoCallParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoCallParticipant upsert
   */
  export type VideoCallParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallParticipant
     */
    select?: VideoCallParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallParticipant
     */
    omit?: VideoCallParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoCallParticipant to update in case it exists.
     */
    where: VideoCallParticipantWhereUniqueInput
    /**
     * In case the VideoCallParticipant found by the `where` argument doesn't exist, create a new VideoCallParticipant with this data.
     */
    create: XOR<VideoCallParticipantCreateInput, VideoCallParticipantUncheckedCreateInput>
    /**
     * In case the VideoCallParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoCallParticipantUpdateInput, VideoCallParticipantUncheckedUpdateInput>
  }

  /**
   * VideoCallParticipant delete
   */
  export type VideoCallParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallParticipant
     */
    select?: VideoCallParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallParticipant
     */
    omit?: VideoCallParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallParticipantInclude<ExtArgs> | null
    /**
     * Filter which VideoCallParticipant to delete.
     */
    where: VideoCallParticipantWhereUniqueInput
  }

  /**
   * VideoCallParticipant deleteMany
   */
  export type VideoCallParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoCallParticipants to delete
     */
    where?: VideoCallParticipantWhereInput
    /**
     * Limit how many VideoCallParticipants to delete.
     */
    limit?: number
  }

  /**
   * VideoCallParticipant without action
   */
  export type VideoCallParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCallParticipant
     */
    select?: VideoCallParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCallParticipant
     */
    omit?: VideoCallParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoCallParticipantInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    fullname: 'fullname',
    avatarUrl: 'avatarUrl'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    is_group: 'is_group',
    name: 'name',
    created_by: 'created_by',
    created_at: 'created_at'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const ConversationMemberScalarFieldEnum: {
    conversation_id: 'conversation_id',
    user_id: 'user_id',
    joined_at: 'joined_at',
    last_read_message_id: 'last_read_message_id'
  };

  export type ConversationMemberScalarFieldEnum = (typeof ConversationMemberScalarFieldEnum)[keyof typeof ConversationMemberScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    conversation_id: 'conversation_id',
    sender_id: 'sender_id',
    status: 'status',
    message: 'message',
    message_type: 'message_type',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const AttachmentScalarFieldEnum: {
    id: 'id',
    message_id: 'message_id',
    file_url: 'file_url',
    file_type: 'file_type',
    created_at: 'created_at'
  };

  export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum]


  export const TypingStatusScalarFieldEnum: {
    conversation_id: 'conversation_id',
    user_id: 'user_id',
    is_typing: 'is_typing',
    updated_at: 'updated_at'
  };

  export type TypingStatusScalarFieldEnum = (typeof TypingStatusScalarFieldEnum)[keyof typeof TypingStatusScalarFieldEnum]


  export const ReadReceiptScalarFieldEnum: {
    message_id: 'message_id',
    user_id: 'user_id',
    read_at: 'read_at'
  };

  export type ReadReceiptScalarFieldEnum = (typeof ReadReceiptScalarFieldEnum)[keyof typeof ReadReceiptScalarFieldEnum]


  export const VideoCallRoomScalarFieldEnum: {
    id: 'id',
    room_code: 'room_code',
    token: 'token',
    host_id: 'host_id',
    created_at: 'created_at'
  };

  export type VideoCallRoomScalarFieldEnum = (typeof VideoCallRoomScalarFieldEnum)[keyof typeof VideoCallRoomScalarFieldEnum]


  export const VideoCallParticipantScalarFieldEnum: {
    id: 'id',
    room_id: 'room_id',
    user_id: 'user_id',
    joined_at: 'joined_at',
    left_at: 'left_at'
  };

  export type VideoCallParticipantScalarFieldEnum = (typeof VideoCallParticipantScalarFieldEnum)[keyof typeof VideoCallParticipantScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MessageStatus'
   */
  export type EnumMessageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageStatus'>
    


  /**
   * Reference to a field of type 'MessageStatus[]'
   */
  export type ListEnumMessageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageStatus[]'>
    


  /**
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'MessageType[]'
   */
  export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>
    


  /**
   * Reference to a field of type 'FileType'
   */
  export type EnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType'>
    


  /**
   * Reference to a field of type 'FileType[]'
   */
  export type ListEnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    fullname?: StringNullableFilter<"Users"> | string | null
    avatarUrl?: StringNullableFilter<"Users"> | string | null
    sentMessages?: MessageListRelationFilter
    conversationMembers?: ConversationMemberListRelationFilter
    readReceipts?: ReadReceiptListRelationFilter
    typingStatuses?: TypingStatusListRelationFilter
    videoCallRooms?: VideoCallRoomListRelationFilter
    videoCallParticipants?: VideoCallParticipantListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    sentMessages?: MessageOrderByRelationAggregateInput
    conversationMembers?: ConversationMemberOrderByRelationAggregateInput
    readReceipts?: ReadReceiptOrderByRelationAggregateInput
    typingStatuses?: TypingStatusOrderByRelationAggregateInput
    videoCallRooms?: VideoCallRoomOrderByRelationAggregateInput
    videoCallParticipants?: VideoCallParticipantOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    fullname?: StringNullableFilter<"Users"> | string | null
    avatarUrl?: StringNullableFilter<"Users"> | string | null
    sentMessages?: MessageListRelationFilter
    conversationMembers?: ConversationMemberListRelationFilter
    readReceipts?: ReadReceiptListRelationFilter
    typingStatuses?: TypingStatusListRelationFilter
    videoCallRooms?: VideoCallRoomListRelationFilter
    videoCallParticipants?: VideoCallParticipantListRelationFilter
  }, "id" | "username">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    fullname?: StringNullableWithAggregatesFilter<"Users"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: StringFilter<"Conversation"> | string
    is_group?: BoolFilter<"Conversation"> | boolean
    name?: StringNullableFilter<"Conversation"> | string | null
    created_by?: StringNullableFilter<"Conversation"> | string | null
    created_at?: DateTimeNullableFilter<"Conversation"> | Date | string | null
    members?: ConversationMemberListRelationFilter
    messages?: MessageListRelationFilter
    typingStatus?: TypingStatusListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    is_group?: SortOrder
    name?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    members?: ConversationMemberOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    typingStatus?: TypingStatusOrderByRelationAggregateInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    is_group?: BoolFilter<"Conversation"> | boolean
    name?: StringNullableFilter<"Conversation"> | string | null
    created_by?: StringNullableFilter<"Conversation"> | string | null
    created_at?: DateTimeNullableFilter<"Conversation"> | Date | string | null
    members?: ConversationMemberListRelationFilter
    messages?: MessageListRelationFilter
    typingStatus?: TypingStatusListRelationFilter
  }, "id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    is_group?: SortOrder
    name?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversation"> | string
    is_group?: BoolWithAggregatesFilter<"Conversation"> | boolean
    name?: StringNullableWithAggregatesFilter<"Conversation"> | string | null
    created_by?: StringNullableWithAggregatesFilter<"Conversation"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Conversation"> | Date | string | null
  }

  export type ConversationMemberWhereInput = {
    AND?: ConversationMemberWhereInput | ConversationMemberWhereInput[]
    OR?: ConversationMemberWhereInput[]
    NOT?: ConversationMemberWhereInput | ConversationMemberWhereInput[]
    conversation_id?: StringFilter<"ConversationMember"> | string
    user_id?: StringFilter<"ConversationMember"> | string
    joined_at?: DateTimeNullableFilter<"ConversationMember"> | Date | string | null
    last_read_message_id?: StringNullableFilter<"ConversationMember"> | string | null
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    lastReadMessage?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
  }

  export type ConversationMemberOrderByWithRelationInput = {
    conversation_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrderInput | SortOrder
    last_read_message_id?: SortOrderInput | SortOrder
    conversation?: ConversationOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
    lastReadMessage?: MessageOrderByWithRelationInput
  }

  export type ConversationMemberWhereUniqueInput = Prisma.AtLeast<{
    conversation_id_user_id?: ConversationMemberConversation_idUser_idCompoundUniqueInput
    AND?: ConversationMemberWhereInput | ConversationMemberWhereInput[]
    OR?: ConversationMemberWhereInput[]
    NOT?: ConversationMemberWhereInput | ConversationMemberWhereInput[]
    conversation_id?: StringFilter<"ConversationMember"> | string
    user_id?: StringFilter<"ConversationMember"> | string
    joined_at?: DateTimeNullableFilter<"ConversationMember"> | Date | string | null
    last_read_message_id?: StringNullableFilter<"ConversationMember"> | string | null
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    lastReadMessage?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
  }, "conversation_id_user_id">

  export type ConversationMemberOrderByWithAggregationInput = {
    conversation_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrderInput | SortOrder
    last_read_message_id?: SortOrderInput | SortOrder
    _count?: ConversationMemberCountOrderByAggregateInput
    _max?: ConversationMemberMaxOrderByAggregateInput
    _min?: ConversationMemberMinOrderByAggregateInput
  }

  export type ConversationMemberScalarWhereWithAggregatesInput = {
    AND?: ConversationMemberScalarWhereWithAggregatesInput | ConversationMemberScalarWhereWithAggregatesInput[]
    OR?: ConversationMemberScalarWhereWithAggregatesInput[]
    NOT?: ConversationMemberScalarWhereWithAggregatesInput | ConversationMemberScalarWhereWithAggregatesInput[]
    conversation_id?: StringWithAggregatesFilter<"ConversationMember"> | string
    user_id?: StringWithAggregatesFilter<"ConversationMember"> | string
    joined_at?: DateTimeNullableWithAggregatesFilter<"ConversationMember"> | Date | string | null
    last_read_message_id?: StringNullableWithAggregatesFilter<"ConversationMember"> | string | null
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    conversation_id?: StringFilter<"Message"> | string
    sender_id?: StringFilter<"Message"> | string
    status?: EnumMessageStatusFilter<"Message"> | $Enums.MessageStatus
    message?: StringFilter<"Message"> | string
    message_type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    created_at?: DateTimeFilter<"Message"> | Date | string
    updated_at?: DateTimeFilter<"Message"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    sender?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    attachments?: AttachmentListRelationFilter
    readReceipts?: ReadReceiptListRelationFilter
    lastReadBy?: ConversationMemberListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    sender_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    message_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    conversation?: ConversationOrderByWithRelationInput
    sender?: UsersOrderByWithRelationInput
    attachments?: AttachmentOrderByRelationAggregateInput
    readReceipts?: ReadReceiptOrderByRelationAggregateInput
    lastReadBy?: ConversationMemberOrderByRelationAggregateInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    conversation_id?: StringFilter<"Message"> | string
    sender_id?: StringFilter<"Message"> | string
    status?: EnumMessageStatusFilter<"Message"> | $Enums.MessageStatus
    message?: StringFilter<"Message"> | string
    message_type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    created_at?: DateTimeFilter<"Message"> | Date | string
    updated_at?: DateTimeFilter<"Message"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    sender?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    attachments?: AttachmentListRelationFilter
    readReceipts?: ReadReceiptListRelationFilter
    lastReadBy?: ConversationMemberListRelationFilter
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    sender_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    message_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    conversation_id?: StringWithAggregatesFilter<"Message"> | string
    sender_id?: StringWithAggregatesFilter<"Message"> | string
    status?: EnumMessageStatusWithAggregatesFilter<"Message"> | $Enums.MessageStatus
    message?: StringWithAggregatesFilter<"Message"> | string
    message_type?: EnumMessageTypeWithAggregatesFilter<"Message"> | $Enums.MessageType
    created_at?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type AttachmentWhereInput = {
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    id?: StringFilter<"Attachment"> | string
    message_id?: StringNullableFilter<"Attachment"> | string | null
    file_url?: StringFilter<"Attachment"> | string
    file_type?: EnumFileTypeNullableFilter<"Attachment"> | $Enums.FileType | null
    created_at?: DateTimeNullableFilter<"Attachment"> | Date | string | null
    message?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
  }

  export type AttachmentOrderByWithRelationInput = {
    id?: SortOrder
    message_id?: SortOrderInput | SortOrder
    file_url?: SortOrder
    file_type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    message?: MessageOrderByWithRelationInput
  }

  export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    message_id?: StringNullableFilter<"Attachment"> | string | null
    file_url?: StringFilter<"Attachment"> | string
    file_type?: EnumFileTypeNullableFilter<"Attachment"> | $Enums.FileType | null
    created_at?: DateTimeNullableFilter<"Attachment"> | Date | string | null
    message?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
  }, "id">

  export type AttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    message_id?: SortOrderInput | SortOrder
    file_url?: SortOrder
    file_type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: AttachmentCountOrderByAggregateInput
    _max?: AttachmentMaxOrderByAggregateInput
    _min?: AttachmentMinOrderByAggregateInput
  }

  export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    OR?: AttachmentScalarWhereWithAggregatesInput[]
    NOT?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attachment"> | string
    message_id?: StringNullableWithAggregatesFilter<"Attachment"> | string | null
    file_url?: StringWithAggregatesFilter<"Attachment"> | string
    file_type?: EnumFileTypeNullableWithAggregatesFilter<"Attachment"> | $Enums.FileType | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Attachment"> | Date | string | null
  }

  export type TypingStatusWhereInput = {
    AND?: TypingStatusWhereInput | TypingStatusWhereInput[]
    OR?: TypingStatusWhereInput[]
    NOT?: TypingStatusWhereInput | TypingStatusWhereInput[]
    conversation_id?: StringFilter<"TypingStatus"> | string
    user_id?: StringFilter<"TypingStatus"> | string
    is_typing?: BoolFilter<"TypingStatus"> | boolean
    updated_at?: DateTimeNullableFilter<"TypingStatus"> | Date | string | null
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type TypingStatusOrderByWithRelationInput = {
    conversation_id?: SortOrder
    user_id?: SortOrder
    is_typing?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    conversation?: ConversationOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type TypingStatusWhereUniqueInput = Prisma.AtLeast<{
    conversation_id_user_id?: TypingStatusConversation_idUser_idCompoundUniqueInput
    AND?: TypingStatusWhereInput | TypingStatusWhereInput[]
    OR?: TypingStatusWhereInput[]
    NOT?: TypingStatusWhereInput | TypingStatusWhereInput[]
    conversation_id?: StringFilter<"TypingStatus"> | string
    user_id?: StringFilter<"TypingStatus"> | string
    is_typing?: BoolFilter<"TypingStatus"> | boolean
    updated_at?: DateTimeNullableFilter<"TypingStatus"> | Date | string | null
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "conversation_id_user_id">

  export type TypingStatusOrderByWithAggregationInput = {
    conversation_id?: SortOrder
    user_id?: SortOrder
    is_typing?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: TypingStatusCountOrderByAggregateInput
    _max?: TypingStatusMaxOrderByAggregateInput
    _min?: TypingStatusMinOrderByAggregateInput
  }

  export type TypingStatusScalarWhereWithAggregatesInput = {
    AND?: TypingStatusScalarWhereWithAggregatesInput | TypingStatusScalarWhereWithAggregatesInput[]
    OR?: TypingStatusScalarWhereWithAggregatesInput[]
    NOT?: TypingStatusScalarWhereWithAggregatesInput | TypingStatusScalarWhereWithAggregatesInput[]
    conversation_id?: StringWithAggregatesFilter<"TypingStatus"> | string
    user_id?: StringWithAggregatesFilter<"TypingStatus"> | string
    is_typing?: BoolWithAggregatesFilter<"TypingStatus"> | boolean
    updated_at?: DateTimeNullableWithAggregatesFilter<"TypingStatus"> | Date | string | null
  }

  export type ReadReceiptWhereInput = {
    AND?: ReadReceiptWhereInput | ReadReceiptWhereInput[]
    OR?: ReadReceiptWhereInput[]
    NOT?: ReadReceiptWhereInput | ReadReceiptWhereInput[]
    message_id?: StringFilter<"ReadReceipt"> | string
    user_id?: StringFilter<"ReadReceipt"> | string
    read_at?: DateTimeNullableFilter<"ReadReceipt"> | Date | string | null
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type ReadReceiptOrderByWithRelationInput = {
    message_id?: SortOrder
    user_id?: SortOrder
    read_at?: SortOrderInput | SortOrder
    message?: MessageOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type ReadReceiptWhereUniqueInput = Prisma.AtLeast<{
    message_id_user_id?: ReadReceiptMessage_idUser_idCompoundUniqueInput
    AND?: ReadReceiptWhereInput | ReadReceiptWhereInput[]
    OR?: ReadReceiptWhereInput[]
    NOT?: ReadReceiptWhereInput | ReadReceiptWhereInput[]
    message_id?: StringFilter<"ReadReceipt"> | string
    user_id?: StringFilter<"ReadReceipt"> | string
    read_at?: DateTimeNullableFilter<"ReadReceipt"> | Date | string | null
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "message_id_user_id">

  export type ReadReceiptOrderByWithAggregationInput = {
    message_id?: SortOrder
    user_id?: SortOrder
    read_at?: SortOrderInput | SortOrder
    _count?: ReadReceiptCountOrderByAggregateInput
    _max?: ReadReceiptMaxOrderByAggregateInput
    _min?: ReadReceiptMinOrderByAggregateInput
  }

  export type ReadReceiptScalarWhereWithAggregatesInput = {
    AND?: ReadReceiptScalarWhereWithAggregatesInput | ReadReceiptScalarWhereWithAggregatesInput[]
    OR?: ReadReceiptScalarWhereWithAggregatesInput[]
    NOT?: ReadReceiptScalarWhereWithAggregatesInput | ReadReceiptScalarWhereWithAggregatesInput[]
    message_id?: StringWithAggregatesFilter<"ReadReceipt"> | string
    user_id?: StringWithAggregatesFilter<"ReadReceipt"> | string
    read_at?: DateTimeNullableWithAggregatesFilter<"ReadReceipt"> | Date | string | null
  }

  export type VideoCallRoomWhereInput = {
    AND?: VideoCallRoomWhereInput | VideoCallRoomWhereInput[]
    OR?: VideoCallRoomWhereInput[]
    NOT?: VideoCallRoomWhereInput | VideoCallRoomWhereInput[]
    id?: StringFilter<"VideoCallRoom"> | string
    room_code?: StringFilter<"VideoCallRoom"> | string
    token?: StringFilter<"VideoCallRoom"> | string
    host_id?: StringFilter<"VideoCallRoom"> | string
    created_at?: DateTimeFilter<"VideoCallRoom"> | Date | string
    host?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    participants?: VideoCallParticipantListRelationFilter
  }

  export type VideoCallRoomOrderByWithRelationInput = {
    id?: SortOrder
    room_code?: SortOrder
    token?: SortOrder
    host_id?: SortOrder
    created_at?: SortOrder
    host?: UsersOrderByWithRelationInput
    participants?: VideoCallParticipantOrderByRelationAggregateInput
  }

  export type VideoCallRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    room_code?: string
    AND?: VideoCallRoomWhereInput | VideoCallRoomWhereInput[]
    OR?: VideoCallRoomWhereInput[]
    NOT?: VideoCallRoomWhereInput | VideoCallRoomWhereInput[]
    token?: StringFilter<"VideoCallRoom"> | string
    host_id?: StringFilter<"VideoCallRoom"> | string
    created_at?: DateTimeFilter<"VideoCallRoom"> | Date | string
    host?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    participants?: VideoCallParticipantListRelationFilter
  }, "id" | "room_code">

  export type VideoCallRoomOrderByWithAggregationInput = {
    id?: SortOrder
    room_code?: SortOrder
    token?: SortOrder
    host_id?: SortOrder
    created_at?: SortOrder
    _count?: VideoCallRoomCountOrderByAggregateInput
    _max?: VideoCallRoomMaxOrderByAggregateInput
    _min?: VideoCallRoomMinOrderByAggregateInput
  }

  export type VideoCallRoomScalarWhereWithAggregatesInput = {
    AND?: VideoCallRoomScalarWhereWithAggregatesInput | VideoCallRoomScalarWhereWithAggregatesInput[]
    OR?: VideoCallRoomScalarWhereWithAggregatesInput[]
    NOT?: VideoCallRoomScalarWhereWithAggregatesInput | VideoCallRoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VideoCallRoom"> | string
    room_code?: StringWithAggregatesFilter<"VideoCallRoom"> | string
    token?: StringWithAggregatesFilter<"VideoCallRoom"> | string
    host_id?: StringWithAggregatesFilter<"VideoCallRoom"> | string
    created_at?: DateTimeWithAggregatesFilter<"VideoCallRoom"> | Date | string
  }

  export type VideoCallParticipantWhereInput = {
    AND?: VideoCallParticipantWhereInput | VideoCallParticipantWhereInput[]
    OR?: VideoCallParticipantWhereInput[]
    NOT?: VideoCallParticipantWhereInput | VideoCallParticipantWhereInput[]
    id?: StringFilter<"VideoCallParticipant"> | string
    room_id?: StringFilter<"VideoCallParticipant"> | string
    user_id?: StringFilter<"VideoCallParticipant"> | string
    joined_at?: DateTimeFilter<"VideoCallParticipant"> | Date | string
    left_at?: DateTimeNullableFilter<"VideoCallParticipant"> | Date | string | null
    room?: XOR<VideoCallRoomScalarRelationFilter, VideoCallRoomWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type VideoCallParticipantOrderByWithRelationInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrder
    left_at?: SortOrderInput | SortOrder
    room?: VideoCallRoomOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type VideoCallParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VideoCallParticipantWhereInput | VideoCallParticipantWhereInput[]
    OR?: VideoCallParticipantWhereInput[]
    NOT?: VideoCallParticipantWhereInput | VideoCallParticipantWhereInput[]
    room_id?: StringFilter<"VideoCallParticipant"> | string
    user_id?: StringFilter<"VideoCallParticipant"> | string
    joined_at?: DateTimeFilter<"VideoCallParticipant"> | Date | string
    left_at?: DateTimeNullableFilter<"VideoCallParticipant"> | Date | string | null
    room?: XOR<VideoCallRoomScalarRelationFilter, VideoCallRoomWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type VideoCallParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrder
    left_at?: SortOrderInput | SortOrder
    _count?: VideoCallParticipantCountOrderByAggregateInput
    _max?: VideoCallParticipantMaxOrderByAggregateInput
    _min?: VideoCallParticipantMinOrderByAggregateInput
  }

  export type VideoCallParticipantScalarWhereWithAggregatesInput = {
    AND?: VideoCallParticipantScalarWhereWithAggregatesInput | VideoCallParticipantScalarWhereWithAggregatesInput[]
    OR?: VideoCallParticipantScalarWhereWithAggregatesInput[]
    NOT?: VideoCallParticipantScalarWhereWithAggregatesInput | VideoCallParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VideoCallParticipant"> | string
    room_id?: StringWithAggregatesFilter<"VideoCallParticipant"> | string
    user_id?: StringWithAggregatesFilter<"VideoCallParticipant"> | string
    joined_at?: DateTimeWithAggregatesFilter<"VideoCallParticipant"> | Date | string
    left_at?: DateTimeNullableWithAggregatesFilter<"VideoCallParticipant"> | Date | string | null
  }

  export type UsersCreateInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    conversationMembers?: ConversationMemberCreateNestedManyWithoutUserInput
    readReceipts?: ReadReceiptCreateNestedManyWithoutUserInput
    typingStatuses?: TypingStatusCreateNestedManyWithoutUserInput
    videoCallRooms?: VideoCallRoomCreateNestedManyWithoutHostInput
    videoCallParticipants?: VideoCallParticipantCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    conversationMembers?: ConversationMemberUncheckedCreateNestedManyWithoutUserInput
    readReceipts?: ReadReceiptUncheckedCreateNestedManyWithoutUserInput
    typingStatuses?: TypingStatusUncheckedCreateNestedManyWithoutUserInput
    videoCallRooms?: VideoCallRoomUncheckedCreateNestedManyWithoutHostInput
    videoCallParticipants?: VideoCallParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    conversationMembers?: ConversationMemberUpdateManyWithoutUserNestedInput
    readReceipts?: ReadReceiptUpdateManyWithoutUserNestedInput
    typingStatuses?: TypingStatusUpdateManyWithoutUserNestedInput
    videoCallRooms?: VideoCallRoomUpdateManyWithoutHostNestedInput
    videoCallParticipants?: VideoCallParticipantUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    conversationMembers?: ConversationMemberUncheckedUpdateManyWithoutUserNestedInput
    readReceipts?: ReadReceiptUncheckedUpdateManyWithoutUserNestedInput
    typingStatuses?: TypingStatusUncheckedUpdateManyWithoutUserNestedInput
    videoCallRooms?: VideoCallRoomUncheckedUpdateManyWithoutHostNestedInput
    videoCallParticipants?: VideoCallParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationCreateInput = {
    id?: string
    is_group?: boolean
    name?: string | null
    created_by?: string | null
    created_at?: Date | string | null
    members?: ConversationMemberCreateNestedManyWithoutConversationInput
    messages?: MessageCreateNestedManyWithoutConversationInput
    typingStatus?: TypingStatusCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: string
    is_group?: boolean
    name?: string | null
    created_by?: string | null
    created_at?: Date | string | null
    members?: ConversationMemberUncheckedCreateNestedManyWithoutConversationInput
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
    typingStatus?: TypingStatusUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_group?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: ConversationMemberUpdateManyWithoutConversationNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
    typingStatus?: TypingStatusUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_group?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: ConversationMemberUncheckedUpdateManyWithoutConversationNestedInput
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
    typingStatus?: TypingStatusUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: string
    is_group?: boolean
    name?: string | null
    created_by?: string | null
    created_at?: Date | string | null
  }

  export type ConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_group?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_group?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConversationMemberCreateInput = {
    joined_at?: Date | string | null
    conversation: ConversationCreateNestedOneWithoutMembersInput
    user: UsersCreateNestedOneWithoutConversationMembersInput
    lastReadMessage?: MessageCreateNestedOneWithoutLastReadByInput
  }

  export type ConversationMemberUncheckedCreateInput = {
    conversation_id: string
    user_id: string
    joined_at?: Date | string | null
    last_read_message_id?: string | null
  }

  export type ConversationMemberUpdateInput = {
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversation?: ConversationUpdateOneRequiredWithoutMembersNestedInput
    user?: UsersUpdateOneRequiredWithoutConversationMembersNestedInput
    lastReadMessage?: MessageUpdateOneWithoutLastReadByNestedInput
  }

  export type ConversationMemberUncheckedUpdateInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_read_message_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationMemberCreateManyInput = {
    conversation_id: string
    user_id: string
    joined_at?: Date | string | null
    last_read_message_id?: string | null
  }

  export type ConversationMemberUpdateManyMutationInput = {
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConversationMemberUncheckedUpdateManyInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_read_message_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateInput = {
    id?: string
    status?: $Enums.MessageStatus
    message: string
    message_type: $Enums.MessageType
    created_at?: Date | string
    updated_at?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
    sender: UsersCreateNestedOneWithoutSentMessagesInput
    attachments?: AttachmentCreateNestedManyWithoutMessageInput
    readReceipts?: ReadReceiptCreateNestedManyWithoutMessageInput
    lastReadBy?: ConversationMemberCreateNestedManyWithoutLastReadMessageInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    conversation_id: string
    sender_id: string
    status?: $Enums.MessageStatus
    message: string
    message_type: $Enums.MessageType
    created_at?: Date | string
    updated_at?: Date | string
    attachments?: AttachmentUncheckedCreateNestedManyWithoutMessageInput
    readReceipts?: ReadReceiptUncheckedCreateNestedManyWithoutMessageInput
    lastReadBy?: ConversationMemberUncheckedCreateNestedManyWithoutLastReadMessageInput
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UsersUpdateOneRequiredWithoutSentMessagesNestedInput
    attachments?: AttachmentUpdateManyWithoutMessageNestedInput
    readReceipts?: ReadReceiptUpdateManyWithoutMessageNestedInput
    lastReadBy?: ConversationMemberUpdateManyWithoutLastReadMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversation_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentUncheckedUpdateManyWithoutMessageNestedInput
    readReceipts?: ReadReceiptUncheckedUpdateManyWithoutMessageNestedInput
    lastReadBy?: ConversationMemberUncheckedUpdateManyWithoutLastReadMessageNestedInput
  }

  export type MessageCreateManyInput = {
    id?: string
    conversation_id: string
    sender_id: string
    status?: $Enums.MessageStatus
    message: string
    message_type: $Enums.MessageType
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversation_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentCreateInput = {
    id?: string
    file_url: string
    file_type?: $Enums.FileType | null
    created_at?: Date | string | null
    message?: MessageCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentUncheckedCreateInput = {
    id?: string
    message_id?: string | null
    file_url: string
    file_type?: $Enums.FileType | null
    created_at?: Date | string | null
  }

  export type AttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: MessageUpdateOneWithoutAttachmentsNestedInput
  }

  export type AttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttachmentCreateManyInput = {
    id?: string
    message_id?: string | null
    file_url: string
    file_type?: $Enums.FileType | null
    created_at?: Date | string | null
  }

  export type AttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TypingStatusCreateInput = {
    is_typing?: boolean
    updated_at?: Date | string | null
    conversation: ConversationCreateNestedOneWithoutTypingStatusInput
    user: UsersCreateNestedOneWithoutTypingStatusesInput
  }

  export type TypingStatusUncheckedCreateInput = {
    conversation_id: string
    user_id: string
    is_typing?: boolean
    updated_at?: Date | string | null
  }

  export type TypingStatusUpdateInput = {
    is_typing?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversation?: ConversationUpdateOneRequiredWithoutTypingStatusNestedInput
    user?: UsersUpdateOneRequiredWithoutTypingStatusesNestedInput
  }

  export type TypingStatusUncheckedUpdateInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    is_typing?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TypingStatusCreateManyInput = {
    conversation_id: string
    user_id: string
    is_typing?: boolean
    updated_at?: Date | string | null
  }

  export type TypingStatusUpdateManyMutationInput = {
    is_typing?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TypingStatusUncheckedUpdateManyInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    is_typing?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReadReceiptCreateInput = {
    read_at?: Date | string | null
    message: MessageCreateNestedOneWithoutReadReceiptsInput
    user: UsersCreateNestedOneWithoutReadReceiptsInput
  }

  export type ReadReceiptUncheckedCreateInput = {
    message_id: string
    user_id: string
    read_at?: Date | string | null
  }

  export type ReadReceiptUpdateInput = {
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: MessageUpdateOneRequiredWithoutReadReceiptsNestedInput
    user?: UsersUpdateOneRequiredWithoutReadReceiptsNestedInput
  }

  export type ReadReceiptUncheckedUpdateInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReadReceiptCreateManyInput = {
    message_id: string
    user_id: string
    read_at?: Date | string | null
  }

  export type ReadReceiptUpdateManyMutationInput = {
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReadReceiptUncheckedUpdateManyInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VideoCallRoomCreateInput = {
    id?: string
    room_code: string
    token: string
    created_at?: Date | string
    host: UsersCreateNestedOneWithoutVideoCallRoomsInput
    participants?: VideoCallParticipantCreateNestedManyWithoutRoomInput
  }

  export type VideoCallRoomUncheckedCreateInput = {
    id?: string
    room_code: string
    token: string
    host_id: string
    created_at?: Date | string
    participants?: VideoCallParticipantUncheckedCreateNestedManyWithoutRoomInput
  }

  export type VideoCallRoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_code?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UsersUpdateOneRequiredWithoutVideoCallRoomsNestedInput
    participants?: VideoCallParticipantUpdateManyWithoutRoomNestedInput
  }

  export type VideoCallRoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_code?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    host_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: VideoCallParticipantUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type VideoCallRoomCreateManyInput = {
    id?: string
    room_code: string
    token: string
    host_id: string
    created_at?: Date | string
  }

  export type VideoCallRoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_code?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCallRoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_code?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    host_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCallParticipantCreateInput = {
    id?: string
    joined_at?: Date | string
    left_at?: Date | string | null
    room: VideoCallRoomCreateNestedOneWithoutParticipantsInput
    user: UsersCreateNestedOneWithoutVideoCallParticipantsInput
  }

  export type VideoCallParticipantUncheckedCreateInput = {
    id?: string
    room_id: string
    user_id: string
    joined_at?: Date | string
    left_at?: Date | string | null
  }

  export type VideoCallParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: VideoCallRoomUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UsersUpdateOneRequiredWithoutVideoCallParticipantsNestedInput
  }

  export type VideoCallParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VideoCallParticipantCreateManyInput = {
    id?: string
    room_id: string
    user_id: string
    joined_at?: Date | string
    left_at?: Date | string | null
  }

  export type VideoCallParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VideoCallParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type ConversationMemberListRelationFilter = {
    every?: ConversationMemberWhereInput
    some?: ConversationMemberWhereInput
    none?: ConversationMemberWhereInput
  }

  export type ReadReceiptListRelationFilter = {
    every?: ReadReceiptWhereInput
    some?: ReadReceiptWhereInput
    none?: ReadReceiptWhereInput
  }

  export type TypingStatusListRelationFilter = {
    every?: TypingStatusWhereInput
    some?: TypingStatusWhereInput
    none?: TypingStatusWhereInput
  }

  export type VideoCallRoomListRelationFilter = {
    every?: VideoCallRoomWhereInput
    some?: VideoCallRoomWhereInput
    none?: VideoCallRoomWhereInput
  }

  export type VideoCallParticipantListRelationFilter = {
    every?: VideoCallParticipantWhereInput
    some?: VideoCallParticipantWhereInput
    none?: VideoCallParticipantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReadReceiptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TypingStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoCallRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoCallParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    avatarUrl?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    avatarUrl?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    avatarUrl?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    is_group?: SortOrder
    name?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    is_group?: SortOrder
    name?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    is_group?: SortOrder
    name?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ConversationScalarRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type MessageNullableScalarRelationFilter = {
    is?: MessageWhereInput | null
    isNot?: MessageWhereInput | null
  }

  export type ConversationMemberConversation_idUser_idCompoundUniqueInput = {
    conversation_id: string
    user_id: string
  }

  export type ConversationMemberCountOrderByAggregateInput = {
    conversation_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrder
    last_read_message_id?: SortOrder
  }

  export type ConversationMemberMaxOrderByAggregateInput = {
    conversation_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrder
    last_read_message_id?: SortOrder
  }

  export type ConversationMemberMinOrderByAggregateInput = {
    conversation_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrder
    last_read_message_id?: SortOrder
  }

  export type EnumMessageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusFilter<$PrismaModel> | $Enums.MessageStatus
  }

  export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AttachmentListRelationFilter = {
    every?: AttachmentWhereInput
    some?: AttachmentWhereInput
    none?: AttachmentWhereInput
  }

  export type AttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    sender_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    message_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    sender_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    message_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    sender_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    message_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumMessageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel> | $Enums.MessageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageStatusFilter<$PrismaModel>
    _max?: NestedEnumMessageStatusFilter<$PrismaModel>
  }

  export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumFileTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFileTypeNullableFilter<$PrismaModel> | $Enums.FileType | null
  }

  export type AttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    created_at?: SortOrder
  }

  export type AttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    created_at?: SortOrder
  }

  export type AttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    created_at?: SortOrder
  }

  export type EnumFileTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFileTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.FileType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFileTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumFileTypeNullableFilter<$PrismaModel>
  }

  export type TypingStatusConversation_idUser_idCompoundUniqueInput = {
    conversation_id: string
    user_id: string
  }

  export type TypingStatusCountOrderByAggregateInput = {
    conversation_id?: SortOrder
    user_id?: SortOrder
    is_typing?: SortOrder
    updated_at?: SortOrder
  }

  export type TypingStatusMaxOrderByAggregateInput = {
    conversation_id?: SortOrder
    user_id?: SortOrder
    is_typing?: SortOrder
    updated_at?: SortOrder
  }

  export type TypingStatusMinOrderByAggregateInput = {
    conversation_id?: SortOrder
    user_id?: SortOrder
    is_typing?: SortOrder
    updated_at?: SortOrder
  }

  export type MessageScalarRelationFilter = {
    is?: MessageWhereInput
    isNot?: MessageWhereInput
  }

  export type ReadReceiptMessage_idUser_idCompoundUniqueInput = {
    message_id: string
    user_id: string
  }

  export type ReadReceiptCountOrderByAggregateInput = {
    message_id?: SortOrder
    user_id?: SortOrder
    read_at?: SortOrder
  }

  export type ReadReceiptMaxOrderByAggregateInput = {
    message_id?: SortOrder
    user_id?: SortOrder
    read_at?: SortOrder
  }

  export type ReadReceiptMinOrderByAggregateInput = {
    message_id?: SortOrder
    user_id?: SortOrder
    read_at?: SortOrder
  }

  export type VideoCallRoomCountOrderByAggregateInput = {
    id?: SortOrder
    room_code?: SortOrder
    token?: SortOrder
    host_id?: SortOrder
    created_at?: SortOrder
  }

  export type VideoCallRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    room_code?: SortOrder
    token?: SortOrder
    host_id?: SortOrder
    created_at?: SortOrder
  }

  export type VideoCallRoomMinOrderByAggregateInput = {
    id?: SortOrder
    room_code?: SortOrder
    token?: SortOrder
    host_id?: SortOrder
    created_at?: SortOrder
  }

  export type VideoCallRoomScalarRelationFilter = {
    is?: VideoCallRoomWhereInput
    isNot?: VideoCallRoomWhereInput
  }

  export type VideoCallParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrder
    left_at?: SortOrder
  }

  export type VideoCallParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrder
    left_at?: SortOrder
  }

  export type VideoCallParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrder
    left_at?: SortOrder
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ConversationMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationMemberCreateWithoutUserInput, ConversationMemberUncheckedCreateWithoutUserInput> | ConversationMemberCreateWithoutUserInput[] | ConversationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutUserInput | ConversationMemberCreateOrConnectWithoutUserInput[]
    createMany?: ConversationMemberCreateManyUserInputEnvelope
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
  }

  export type ReadReceiptCreateNestedManyWithoutUserInput = {
    create?: XOR<ReadReceiptCreateWithoutUserInput, ReadReceiptUncheckedCreateWithoutUserInput> | ReadReceiptCreateWithoutUserInput[] | ReadReceiptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadReceiptCreateOrConnectWithoutUserInput | ReadReceiptCreateOrConnectWithoutUserInput[]
    createMany?: ReadReceiptCreateManyUserInputEnvelope
    connect?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
  }

  export type TypingStatusCreateNestedManyWithoutUserInput = {
    create?: XOR<TypingStatusCreateWithoutUserInput, TypingStatusUncheckedCreateWithoutUserInput> | TypingStatusCreateWithoutUserInput[] | TypingStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TypingStatusCreateOrConnectWithoutUserInput | TypingStatusCreateOrConnectWithoutUserInput[]
    createMany?: TypingStatusCreateManyUserInputEnvelope
    connect?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
  }

  export type VideoCallRoomCreateNestedManyWithoutHostInput = {
    create?: XOR<VideoCallRoomCreateWithoutHostInput, VideoCallRoomUncheckedCreateWithoutHostInput> | VideoCallRoomCreateWithoutHostInput[] | VideoCallRoomUncheckedCreateWithoutHostInput[]
    connectOrCreate?: VideoCallRoomCreateOrConnectWithoutHostInput | VideoCallRoomCreateOrConnectWithoutHostInput[]
    createMany?: VideoCallRoomCreateManyHostInputEnvelope
    connect?: VideoCallRoomWhereUniqueInput | VideoCallRoomWhereUniqueInput[]
  }

  export type VideoCallParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoCallParticipantCreateWithoutUserInput, VideoCallParticipantUncheckedCreateWithoutUserInput> | VideoCallParticipantCreateWithoutUserInput[] | VideoCallParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCallParticipantCreateOrConnectWithoutUserInput | VideoCallParticipantCreateOrConnectWithoutUserInput[]
    createMany?: VideoCallParticipantCreateManyUserInputEnvelope
    connect?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ConversationMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationMemberCreateWithoutUserInput, ConversationMemberUncheckedCreateWithoutUserInput> | ConversationMemberCreateWithoutUserInput[] | ConversationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutUserInput | ConversationMemberCreateOrConnectWithoutUserInput[]
    createMany?: ConversationMemberCreateManyUserInputEnvelope
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
  }

  export type ReadReceiptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReadReceiptCreateWithoutUserInput, ReadReceiptUncheckedCreateWithoutUserInput> | ReadReceiptCreateWithoutUserInput[] | ReadReceiptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadReceiptCreateOrConnectWithoutUserInput | ReadReceiptCreateOrConnectWithoutUserInput[]
    createMany?: ReadReceiptCreateManyUserInputEnvelope
    connect?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
  }

  export type TypingStatusUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TypingStatusCreateWithoutUserInput, TypingStatusUncheckedCreateWithoutUserInput> | TypingStatusCreateWithoutUserInput[] | TypingStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TypingStatusCreateOrConnectWithoutUserInput | TypingStatusCreateOrConnectWithoutUserInput[]
    createMany?: TypingStatusCreateManyUserInputEnvelope
    connect?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
  }

  export type VideoCallRoomUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<VideoCallRoomCreateWithoutHostInput, VideoCallRoomUncheckedCreateWithoutHostInput> | VideoCallRoomCreateWithoutHostInput[] | VideoCallRoomUncheckedCreateWithoutHostInput[]
    connectOrCreate?: VideoCallRoomCreateOrConnectWithoutHostInput | VideoCallRoomCreateOrConnectWithoutHostInput[]
    createMany?: VideoCallRoomCreateManyHostInputEnvelope
    connect?: VideoCallRoomWhereUniqueInput | VideoCallRoomWhereUniqueInput[]
  }

  export type VideoCallParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoCallParticipantCreateWithoutUserInput, VideoCallParticipantUncheckedCreateWithoutUserInput> | VideoCallParticipantCreateWithoutUserInput[] | VideoCallParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCallParticipantCreateOrConnectWithoutUserInput | VideoCallParticipantCreateOrConnectWithoutUserInput[]
    createMany?: VideoCallParticipantCreateManyUserInputEnvelope
    connect?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConversationMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationMemberCreateWithoutUserInput, ConversationMemberUncheckedCreateWithoutUserInput> | ConversationMemberCreateWithoutUserInput[] | ConversationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutUserInput | ConversationMemberCreateOrConnectWithoutUserInput[]
    upsert?: ConversationMemberUpsertWithWhereUniqueWithoutUserInput | ConversationMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationMemberCreateManyUserInputEnvelope
    set?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    disconnect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    delete?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    update?: ConversationMemberUpdateWithWhereUniqueWithoutUserInput | ConversationMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationMemberUpdateManyWithWhereWithoutUserInput | ConversationMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationMemberScalarWhereInput | ConversationMemberScalarWhereInput[]
  }

  export type ReadReceiptUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReadReceiptCreateWithoutUserInput, ReadReceiptUncheckedCreateWithoutUserInput> | ReadReceiptCreateWithoutUserInput[] | ReadReceiptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadReceiptCreateOrConnectWithoutUserInput | ReadReceiptCreateOrConnectWithoutUserInput[]
    upsert?: ReadReceiptUpsertWithWhereUniqueWithoutUserInput | ReadReceiptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReadReceiptCreateManyUserInputEnvelope
    set?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
    disconnect?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
    delete?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
    connect?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
    update?: ReadReceiptUpdateWithWhereUniqueWithoutUserInput | ReadReceiptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReadReceiptUpdateManyWithWhereWithoutUserInput | ReadReceiptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReadReceiptScalarWhereInput | ReadReceiptScalarWhereInput[]
  }

  export type TypingStatusUpdateManyWithoutUserNestedInput = {
    create?: XOR<TypingStatusCreateWithoutUserInput, TypingStatusUncheckedCreateWithoutUserInput> | TypingStatusCreateWithoutUserInput[] | TypingStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TypingStatusCreateOrConnectWithoutUserInput | TypingStatusCreateOrConnectWithoutUserInput[]
    upsert?: TypingStatusUpsertWithWhereUniqueWithoutUserInput | TypingStatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TypingStatusCreateManyUserInputEnvelope
    set?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
    disconnect?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
    delete?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
    connect?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
    update?: TypingStatusUpdateWithWhereUniqueWithoutUserInput | TypingStatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TypingStatusUpdateManyWithWhereWithoutUserInput | TypingStatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TypingStatusScalarWhereInput | TypingStatusScalarWhereInput[]
  }

  export type VideoCallRoomUpdateManyWithoutHostNestedInput = {
    create?: XOR<VideoCallRoomCreateWithoutHostInput, VideoCallRoomUncheckedCreateWithoutHostInput> | VideoCallRoomCreateWithoutHostInput[] | VideoCallRoomUncheckedCreateWithoutHostInput[]
    connectOrCreate?: VideoCallRoomCreateOrConnectWithoutHostInput | VideoCallRoomCreateOrConnectWithoutHostInput[]
    upsert?: VideoCallRoomUpsertWithWhereUniqueWithoutHostInput | VideoCallRoomUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: VideoCallRoomCreateManyHostInputEnvelope
    set?: VideoCallRoomWhereUniqueInput | VideoCallRoomWhereUniqueInput[]
    disconnect?: VideoCallRoomWhereUniqueInput | VideoCallRoomWhereUniqueInput[]
    delete?: VideoCallRoomWhereUniqueInput | VideoCallRoomWhereUniqueInput[]
    connect?: VideoCallRoomWhereUniqueInput | VideoCallRoomWhereUniqueInput[]
    update?: VideoCallRoomUpdateWithWhereUniqueWithoutHostInput | VideoCallRoomUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: VideoCallRoomUpdateManyWithWhereWithoutHostInput | VideoCallRoomUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: VideoCallRoomScalarWhereInput | VideoCallRoomScalarWhereInput[]
  }

  export type VideoCallParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoCallParticipantCreateWithoutUserInput, VideoCallParticipantUncheckedCreateWithoutUserInput> | VideoCallParticipantCreateWithoutUserInput[] | VideoCallParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCallParticipantCreateOrConnectWithoutUserInput | VideoCallParticipantCreateOrConnectWithoutUserInput[]
    upsert?: VideoCallParticipantUpsertWithWhereUniqueWithoutUserInput | VideoCallParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoCallParticipantCreateManyUserInputEnvelope
    set?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
    disconnect?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
    delete?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
    connect?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
    update?: VideoCallParticipantUpdateWithWhereUniqueWithoutUserInput | VideoCallParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoCallParticipantUpdateManyWithWhereWithoutUserInput | VideoCallParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoCallParticipantScalarWhereInput | VideoCallParticipantScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConversationMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationMemberCreateWithoutUserInput, ConversationMemberUncheckedCreateWithoutUserInput> | ConversationMemberCreateWithoutUserInput[] | ConversationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutUserInput | ConversationMemberCreateOrConnectWithoutUserInput[]
    upsert?: ConversationMemberUpsertWithWhereUniqueWithoutUserInput | ConversationMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationMemberCreateManyUserInputEnvelope
    set?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    disconnect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    delete?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    update?: ConversationMemberUpdateWithWhereUniqueWithoutUserInput | ConversationMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationMemberUpdateManyWithWhereWithoutUserInput | ConversationMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationMemberScalarWhereInput | ConversationMemberScalarWhereInput[]
  }

  export type ReadReceiptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReadReceiptCreateWithoutUserInput, ReadReceiptUncheckedCreateWithoutUserInput> | ReadReceiptCreateWithoutUserInput[] | ReadReceiptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadReceiptCreateOrConnectWithoutUserInput | ReadReceiptCreateOrConnectWithoutUserInput[]
    upsert?: ReadReceiptUpsertWithWhereUniqueWithoutUserInput | ReadReceiptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReadReceiptCreateManyUserInputEnvelope
    set?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
    disconnect?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
    delete?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
    connect?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
    update?: ReadReceiptUpdateWithWhereUniqueWithoutUserInput | ReadReceiptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReadReceiptUpdateManyWithWhereWithoutUserInput | ReadReceiptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReadReceiptScalarWhereInput | ReadReceiptScalarWhereInput[]
  }

  export type TypingStatusUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TypingStatusCreateWithoutUserInput, TypingStatusUncheckedCreateWithoutUserInput> | TypingStatusCreateWithoutUserInput[] | TypingStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TypingStatusCreateOrConnectWithoutUserInput | TypingStatusCreateOrConnectWithoutUserInput[]
    upsert?: TypingStatusUpsertWithWhereUniqueWithoutUserInput | TypingStatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TypingStatusCreateManyUserInputEnvelope
    set?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
    disconnect?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
    delete?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
    connect?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
    update?: TypingStatusUpdateWithWhereUniqueWithoutUserInput | TypingStatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TypingStatusUpdateManyWithWhereWithoutUserInput | TypingStatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TypingStatusScalarWhereInput | TypingStatusScalarWhereInput[]
  }

  export type VideoCallRoomUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<VideoCallRoomCreateWithoutHostInput, VideoCallRoomUncheckedCreateWithoutHostInput> | VideoCallRoomCreateWithoutHostInput[] | VideoCallRoomUncheckedCreateWithoutHostInput[]
    connectOrCreate?: VideoCallRoomCreateOrConnectWithoutHostInput | VideoCallRoomCreateOrConnectWithoutHostInput[]
    upsert?: VideoCallRoomUpsertWithWhereUniqueWithoutHostInput | VideoCallRoomUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: VideoCallRoomCreateManyHostInputEnvelope
    set?: VideoCallRoomWhereUniqueInput | VideoCallRoomWhereUniqueInput[]
    disconnect?: VideoCallRoomWhereUniqueInput | VideoCallRoomWhereUniqueInput[]
    delete?: VideoCallRoomWhereUniqueInput | VideoCallRoomWhereUniqueInput[]
    connect?: VideoCallRoomWhereUniqueInput | VideoCallRoomWhereUniqueInput[]
    update?: VideoCallRoomUpdateWithWhereUniqueWithoutHostInput | VideoCallRoomUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: VideoCallRoomUpdateManyWithWhereWithoutHostInput | VideoCallRoomUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: VideoCallRoomScalarWhereInput | VideoCallRoomScalarWhereInput[]
  }

  export type VideoCallParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoCallParticipantCreateWithoutUserInput, VideoCallParticipantUncheckedCreateWithoutUserInput> | VideoCallParticipantCreateWithoutUserInput[] | VideoCallParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCallParticipantCreateOrConnectWithoutUserInput | VideoCallParticipantCreateOrConnectWithoutUserInput[]
    upsert?: VideoCallParticipantUpsertWithWhereUniqueWithoutUserInput | VideoCallParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoCallParticipantCreateManyUserInputEnvelope
    set?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
    disconnect?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
    delete?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
    connect?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
    update?: VideoCallParticipantUpdateWithWhereUniqueWithoutUserInput | VideoCallParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoCallParticipantUpdateManyWithWhereWithoutUserInput | VideoCallParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoCallParticipantScalarWhereInput | VideoCallParticipantScalarWhereInput[]
  }

  export type ConversationMemberCreateNestedManyWithoutConversationInput = {
    create?: XOR<ConversationMemberCreateWithoutConversationInput, ConversationMemberUncheckedCreateWithoutConversationInput> | ConversationMemberCreateWithoutConversationInput[] | ConversationMemberUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutConversationInput | ConversationMemberCreateOrConnectWithoutConversationInput[]
    createMany?: ConversationMemberCreateManyConversationInputEnvelope
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type TypingStatusCreateNestedManyWithoutConversationInput = {
    create?: XOR<TypingStatusCreateWithoutConversationInput, TypingStatusUncheckedCreateWithoutConversationInput> | TypingStatusCreateWithoutConversationInput[] | TypingStatusUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: TypingStatusCreateOrConnectWithoutConversationInput | TypingStatusCreateOrConnectWithoutConversationInput[]
    createMany?: TypingStatusCreateManyConversationInputEnvelope
    connect?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
  }

  export type ConversationMemberUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<ConversationMemberCreateWithoutConversationInput, ConversationMemberUncheckedCreateWithoutConversationInput> | ConversationMemberCreateWithoutConversationInput[] | ConversationMemberUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutConversationInput | ConversationMemberCreateOrConnectWithoutConversationInput[]
    createMany?: ConversationMemberCreateManyConversationInputEnvelope
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type TypingStatusUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<TypingStatusCreateWithoutConversationInput, TypingStatusUncheckedCreateWithoutConversationInput> | TypingStatusCreateWithoutConversationInput[] | TypingStatusUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: TypingStatusCreateOrConnectWithoutConversationInput | TypingStatusCreateOrConnectWithoutConversationInput[]
    createMany?: TypingStatusCreateManyConversationInputEnvelope
    connect?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ConversationMemberUpdateManyWithoutConversationNestedInput = {
    create?: XOR<ConversationMemberCreateWithoutConversationInput, ConversationMemberUncheckedCreateWithoutConversationInput> | ConversationMemberCreateWithoutConversationInput[] | ConversationMemberUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutConversationInput | ConversationMemberCreateOrConnectWithoutConversationInput[]
    upsert?: ConversationMemberUpsertWithWhereUniqueWithoutConversationInput | ConversationMemberUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: ConversationMemberCreateManyConversationInputEnvelope
    set?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    disconnect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    delete?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    update?: ConversationMemberUpdateWithWhereUniqueWithoutConversationInput | ConversationMemberUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: ConversationMemberUpdateManyWithWhereWithoutConversationInput | ConversationMemberUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: ConversationMemberScalarWhereInput | ConversationMemberScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type TypingStatusUpdateManyWithoutConversationNestedInput = {
    create?: XOR<TypingStatusCreateWithoutConversationInput, TypingStatusUncheckedCreateWithoutConversationInput> | TypingStatusCreateWithoutConversationInput[] | TypingStatusUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: TypingStatusCreateOrConnectWithoutConversationInput | TypingStatusCreateOrConnectWithoutConversationInput[]
    upsert?: TypingStatusUpsertWithWhereUniqueWithoutConversationInput | TypingStatusUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: TypingStatusCreateManyConversationInputEnvelope
    set?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
    disconnect?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
    delete?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
    connect?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
    update?: TypingStatusUpdateWithWhereUniqueWithoutConversationInput | TypingStatusUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: TypingStatusUpdateManyWithWhereWithoutConversationInput | TypingStatusUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: TypingStatusScalarWhereInput | TypingStatusScalarWhereInput[]
  }

  export type ConversationMemberUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<ConversationMemberCreateWithoutConversationInput, ConversationMemberUncheckedCreateWithoutConversationInput> | ConversationMemberCreateWithoutConversationInput[] | ConversationMemberUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutConversationInput | ConversationMemberCreateOrConnectWithoutConversationInput[]
    upsert?: ConversationMemberUpsertWithWhereUniqueWithoutConversationInput | ConversationMemberUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: ConversationMemberCreateManyConversationInputEnvelope
    set?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    disconnect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    delete?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    update?: ConversationMemberUpdateWithWhereUniqueWithoutConversationInput | ConversationMemberUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: ConversationMemberUpdateManyWithWhereWithoutConversationInput | ConversationMemberUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: ConversationMemberScalarWhereInput | ConversationMemberScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type TypingStatusUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<TypingStatusCreateWithoutConversationInput, TypingStatusUncheckedCreateWithoutConversationInput> | TypingStatusCreateWithoutConversationInput[] | TypingStatusUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: TypingStatusCreateOrConnectWithoutConversationInput | TypingStatusCreateOrConnectWithoutConversationInput[]
    upsert?: TypingStatusUpsertWithWhereUniqueWithoutConversationInput | TypingStatusUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: TypingStatusCreateManyConversationInputEnvelope
    set?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
    disconnect?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
    delete?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
    connect?: TypingStatusWhereUniqueInput | TypingStatusWhereUniqueInput[]
    update?: TypingStatusUpdateWithWhereUniqueWithoutConversationInput | TypingStatusUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: TypingStatusUpdateManyWithWhereWithoutConversationInput | TypingStatusUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: TypingStatusScalarWhereInput | TypingStatusScalarWhereInput[]
  }

  export type ConversationCreateNestedOneWithoutMembersInput = {
    create?: XOR<ConversationCreateWithoutMembersInput, ConversationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMembersInput
    connect?: ConversationWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutConversationMembersInput = {
    create?: XOR<UsersCreateWithoutConversationMembersInput, UsersUncheckedCreateWithoutConversationMembersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutConversationMembersInput
    connect?: UsersWhereUniqueInput
  }

  export type MessageCreateNestedOneWithoutLastReadByInput = {
    create?: XOR<MessageCreateWithoutLastReadByInput, MessageUncheckedCreateWithoutLastReadByInput>
    connectOrCreate?: MessageCreateOrConnectWithoutLastReadByInput
    connect?: MessageWhereUniqueInput
  }

  export type ConversationUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ConversationCreateWithoutMembersInput, ConversationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMembersInput
    upsert?: ConversationUpsertWithoutMembersInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMembersInput, ConversationUpdateWithoutMembersInput>, ConversationUncheckedUpdateWithoutMembersInput>
  }

  export type UsersUpdateOneRequiredWithoutConversationMembersNestedInput = {
    create?: XOR<UsersCreateWithoutConversationMembersInput, UsersUncheckedCreateWithoutConversationMembersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutConversationMembersInput
    upsert?: UsersUpsertWithoutConversationMembersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutConversationMembersInput, UsersUpdateWithoutConversationMembersInput>, UsersUncheckedUpdateWithoutConversationMembersInput>
  }

  export type MessageUpdateOneWithoutLastReadByNestedInput = {
    create?: XOR<MessageCreateWithoutLastReadByInput, MessageUncheckedCreateWithoutLastReadByInput>
    connectOrCreate?: MessageCreateOrConnectWithoutLastReadByInput
    upsert?: MessageUpsertWithoutLastReadByInput
    disconnect?: MessageWhereInput | boolean
    delete?: MessageWhereInput | boolean
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutLastReadByInput, MessageUpdateWithoutLastReadByInput>, MessageUncheckedUpdateWithoutLastReadByInput>
  }

  export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UsersCreateWithoutSentMessagesInput, UsersUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSentMessagesInput
    connect?: UsersWhereUniqueInput
  }

  export type AttachmentCreateNestedManyWithoutMessageInput = {
    create?: XOR<AttachmentCreateWithoutMessageInput, AttachmentUncheckedCreateWithoutMessageInput> | AttachmentCreateWithoutMessageInput[] | AttachmentUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutMessageInput | AttachmentCreateOrConnectWithoutMessageInput[]
    createMany?: AttachmentCreateManyMessageInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type ReadReceiptCreateNestedManyWithoutMessageInput = {
    create?: XOR<ReadReceiptCreateWithoutMessageInput, ReadReceiptUncheckedCreateWithoutMessageInput> | ReadReceiptCreateWithoutMessageInput[] | ReadReceiptUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ReadReceiptCreateOrConnectWithoutMessageInput | ReadReceiptCreateOrConnectWithoutMessageInput[]
    createMany?: ReadReceiptCreateManyMessageInputEnvelope
    connect?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
  }

  export type ConversationMemberCreateNestedManyWithoutLastReadMessageInput = {
    create?: XOR<ConversationMemberCreateWithoutLastReadMessageInput, ConversationMemberUncheckedCreateWithoutLastReadMessageInput> | ConversationMemberCreateWithoutLastReadMessageInput[] | ConversationMemberUncheckedCreateWithoutLastReadMessageInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutLastReadMessageInput | ConversationMemberCreateOrConnectWithoutLastReadMessageInput[]
    createMany?: ConversationMemberCreateManyLastReadMessageInputEnvelope
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<AttachmentCreateWithoutMessageInput, AttachmentUncheckedCreateWithoutMessageInput> | AttachmentCreateWithoutMessageInput[] | AttachmentUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutMessageInput | AttachmentCreateOrConnectWithoutMessageInput[]
    createMany?: AttachmentCreateManyMessageInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type ReadReceiptUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<ReadReceiptCreateWithoutMessageInput, ReadReceiptUncheckedCreateWithoutMessageInput> | ReadReceiptCreateWithoutMessageInput[] | ReadReceiptUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ReadReceiptCreateOrConnectWithoutMessageInput | ReadReceiptCreateOrConnectWithoutMessageInput[]
    createMany?: ReadReceiptCreateManyMessageInputEnvelope
    connect?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
  }

  export type ConversationMemberUncheckedCreateNestedManyWithoutLastReadMessageInput = {
    create?: XOR<ConversationMemberCreateWithoutLastReadMessageInput, ConversationMemberUncheckedCreateWithoutLastReadMessageInput> | ConversationMemberCreateWithoutLastReadMessageInput[] | ConversationMemberUncheckedCreateWithoutLastReadMessageInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutLastReadMessageInput | ConversationMemberCreateOrConnectWithoutLastReadMessageInput[]
    createMany?: ConversationMemberCreateManyLastReadMessageInputEnvelope
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
  }

  export type EnumMessageStatusFieldUpdateOperationsInput = {
    set?: $Enums.MessageStatus
  }

  export type EnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    upsert?: ConversationUpsertWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMessagesInput, ConversationUpdateWithoutMessagesInput>, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type UsersUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UsersCreateWithoutSentMessagesInput, UsersUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSentMessagesInput
    upsert?: UsersUpsertWithoutSentMessagesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSentMessagesInput, UsersUpdateWithoutSentMessagesInput>, UsersUncheckedUpdateWithoutSentMessagesInput>
  }

  export type AttachmentUpdateManyWithoutMessageNestedInput = {
    create?: XOR<AttachmentCreateWithoutMessageInput, AttachmentUncheckedCreateWithoutMessageInput> | AttachmentCreateWithoutMessageInput[] | AttachmentUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutMessageInput | AttachmentCreateOrConnectWithoutMessageInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutMessageInput | AttachmentUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: AttachmentCreateManyMessageInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutMessageInput | AttachmentUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutMessageInput | AttachmentUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type ReadReceiptUpdateManyWithoutMessageNestedInput = {
    create?: XOR<ReadReceiptCreateWithoutMessageInput, ReadReceiptUncheckedCreateWithoutMessageInput> | ReadReceiptCreateWithoutMessageInput[] | ReadReceiptUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ReadReceiptCreateOrConnectWithoutMessageInput | ReadReceiptCreateOrConnectWithoutMessageInput[]
    upsert?: ReadReceiptUpsertWithWhereUniqueWithoutMessageInput | ReadReceiptUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: ReadReceiptCreateManyMessageInputEnvelope
    set?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
    disconnect?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
    delete?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
    connect?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
    update?: ReadReceiptUpdateWithWhereUniqueWithoutMessageInput | ReadReceiptUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: ReadReceiptUpdateManyWithWhereWithoutMessageInput | ReadReceiptUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: ReadReceiptScalarWhereInput | ReadReceiptScalarWhereInput[]
  }

  export type ConversationMemberUpdateManyWithoutLastReadMessageNestedInput = {
    create?: XOR<ConversationMemberCreateWithoutLastReadMessageInput, ConversationMemberUncheckedCreateWithoutLastReadMessageInput> | ConversationMemberCreateWithoutLastReadMessageInput[] | ConversationMemberUncheckedCreateWithoutLastReadMessageInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutLastReadMessageInput | ConversationMemberCreateOrConnectWithoutLastReadMessageInput[]
    upsert?: ConversationMemberUpsertWithWhereUniqueWithoutLastReadMessageInput | ConversationMemberUpsertWithWhereUniqueWithoutLastReadMessageInput[]
    createMany?: ConversationMemberCreateManyLastReadMessageInputEnvelope
    set?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    disconnect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    delete?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    update?: ConversationMemberUpdateWithWhereUniqueWithoutLastReadMessageInput | ConversationMemberUpdateWithWhereUniqueWithoutLastReadMessageInput[]
    updateMany?: ConversationMemberUpdateManyWithWhereWithoutLastReadMessageInput | ConversationMemberUpdateManyWithWhereWithoutLastReadMessageInput[]
    deleteMany?: ConversationMemberScalarWhereInput | ConversationMemberScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<AttachmentCreateWithoutMessageInput, AttachmentUncheckedCreateWithoutMessageInput> | AttachmentCreateWithoutMessageInput[] | AttachmentUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutMessageInput | AttachmentCreateOrConnectWithoutMessageInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutMessageInput | AttachmentUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: AttachmentCreateManyMessageInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutMessageInput | AttachmentUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutMessageInput | AttachmentUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type ReadReceiptUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<ReadReceiptCreateWithoutMessageInput, ReadReceiptUncheckedCreateWithoutMessageInput> | ReadReceiptCreateWithoutMessageInput[] | ReadReceiptUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ReadReceiptCreateOrConnectWithoutMessageInput | ReadReceiptCreateOrConnectWithoutMessageInput[]
    upsert?: ReadReceiptUpsertWithWhereUniqueWithoutMessageInput | ReadReceiptUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: ReadReceiptCreateManyMessageInputEnvelope
    set?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
    disconnect?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
    delete?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
    connect?: ReadReceiptWhereUniqueInput | ReadReceiptWhereUniqueInput[]
    update?: ReadReceiptUpdateWithWhereUniqueWithoutMessageInput | ReadReceiptUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: ReadReceiptUpdateManyWithWhereWithoutMessageInput | ReadReceiptUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: ReadReceiptScalarWhereInput | ReadReceiptScalarWhereInput[]
  }

  export type ConversationMemberUncheckedUpdateManyWithoutLastReadMessageNestedInput = {
    create?: XOR<ConversationMemberCreateWithoutLastReadMessageInput, ConversationMemberUncheckedCreateWithoutLastReadMessageInput> | ConversationMemberCreateWithoutLastReadMessageInput[] | ConversationMemberUncheckedCreateWithoutLastReadMessageInput[]
    connectOrCreate?: ConversationMemberCreateOrConnectWithoutLastReadMessageInput | ConversationMemberCreateOrConnectWithoutLastReadMessageInput[]
    upsert?: ConversationMemberUpsertWithWhereUniqueWithoutLastReadMessageInput | ConversationMemberUpsertWithWhereUniqueWithoutLastReadMessageInput[]
    createMany?: ConversationMemberCreateManyLastReadMessageInputEnvelope
    set?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    disconnect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    delete?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    connect?: ConversationMemberWhereUniqueInput | ConversationMemberWhereUniqueInput[]
    update?: ConversationMemberUpdateWithWhereUniqueWithoutLastReadMessageInput | ConversationMemberUpdateWithWhereUniqueWithoutLastReadMessageInput[]
    updateMany?: ConversationMemberUpdateManyWithWhereWithoutLastReadMessageInput | ConversationMemberUpdateManyWithWhereWithoutLastReadMessageInput[]
    deleteMany?: ConversationMemberScalarWhereInput | ConversationMemberScalarWhereInput[]
  }

  export type MessageCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<MessageCreateWithoutAttachmentsInput, MessageUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutAttachmentsInput
    connect?: MessageWhereUniqueInput
  }

  export type NullableEnumFileTypeFieldUpdateOperationsInput = {
    set?: $Enums.FileType | null
  }

  export type MessageUpdateOneWithoutAttachmentsNestedInput = {
    create?: XOR<MessageCreateWithoutAttachmentsInput, MessageUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutAttachmentsInput
    upsert?: MessageUpsertWithoutAttachmentsInput
    disconnect?: MessageWhereInput | boolean
    delete?: MessageWhereInput | boolean
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutAttachmentsInput, MessageUpdateWithoutAttachmentsInput>, MessageUncheckedUpdateWithoutAttachmentsInput>
  }

  export type ConversationCreateNestedOneWithoutTypingStatusInput = {
    create?: XOR<ConversationCreateWithoutTypingStatusInput, ConversationUncheckedCreateWithoutTypingStatusInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutTypingStatusInput
    connect?: ConversationWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutTypingStatusesInput = {
    create?: XOR<UsersCreateWithoutTypingStatusesInput, UsersUncheckedCreateWithoutTypingStatusesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTypingStatusesInput
    connect?: UsersWhereUniqueInput
  }

  export type ConversationUpdateOneRequiredWithoutTypingStatusNestedInput = {
    create?: XOR<ConversationCreateWithoutTypingStatusInput, ConversationUncheckedCreateWithoutTypingStatusInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutTypingStatusInput
    upsert?: ConversationUpsertWithoutTypingStatusInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutTypingStatusInput, ConversationUpdateWithoutTypingStatusInput>, ConversationUncheckedUpdateWithoutTypingStatusInput>
  }

  export type UsersUpdateOneRequiredWithoutTypingStatusesNestedInput = {
    create?: XOR<UsersCreateWithoutTypingStatusesInput, UsersUncheckedCreateWithoutTypingStatusesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTypingStatusesInput
    upsert?: UsersUpsertWithoutTypingStatusesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTypingStatusesInput, UsersUpdateWithoutTypingStatusesInput>, UsersUncheckedUpdateWithoutTypingStatusesInput>
  }

  export type MessageCreateNestedOneWithoutReadReceiptsInput = {
    create?: XOR<MessageCreateWithoutReadReceiptsInput, MessageUncheckedCreateWithoutReadReceiptsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutReadReceiptsInput
    connect?: MessageWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutReadReceiptsInput = {
    create?: XOR<UsersCreateWithoutReadReceiptsInput, UsersUncheckedCreateWithoutReadReceiptsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReadReceiptsInput
    connect?: UsersWhereUniqueInput
  }

  export type MessageUpdateOneRequiredWithoutReadReceiptsNestedInput = {
    create?: XOR<MessageCreateWithoutReadReceiptsInput, MessageUncheckedCreateWithoutReadReceiptsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutReadReceiptsInput
    upsert?: MessageUpsertWithoutReadReceiptsInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutReadReceiptsInput, MessageUpdateWithoutReadReceiptsInput>, MessageUncheckedUpdateWithoutReadReceiptsInput>
  }

  export type UsersUpdateOneRequiredWithoutReadReceiptsNestedInput = {
    create?: XOR<UsersCreateWithoutReadReceiptsInput, UsersUncheckedCreateWithoutReadReceiptsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReadReceiptsInput
    upsert?: UsersUpsertWithoutReadReceiptsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutReadReceiptsInput, UsersUpdateWithoutReadReceiptsInput>, UsersUncheckedUpdateWithoutReadReceiptsInput>
  }

  export type UsersCreateNestedOneWithoutVideoCallRoomsInput = {
    create?: XOR<UsersCreateWithoutVideoCallRoomsInput, UsersUncheckedCreateWithoutVideoCallRoomsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVideoCallRoomsInput
    connect?: UsersWhereUniqueInput
  }

  export type VideoCallParticipantCreateNestedManyWithoutRoomInput = {
    create?: XOR<VideoCallParticipantCreateWithoutRoomInput, VideoCallParticipantUncheckedCreateWithoutRoomInput> | VideoCallParticipantCreateWithoutRoomInput[] | VideoCallParticipantUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: VideoCallParticipantCreateOrConnectWithoutRoomInput | VideoCallParticipantCreateOrConnectWithoutRoomInput[]
    createMany?: VideoCallParticipantCreateManyRoomInputEnvelope
    connect?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
  }

  export type VideoCallParticipantUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<VideoCallParticipantCreateWithoutRoomInput, VideoCallParticipantUncheckedCreateWithoutRoomInput> | VideoCallParticipantCreateWithoutRoomInput[] | VideoCallParticipantUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: VideoCallParticipantCreateOrConnectWithoutRoomInput | VideoCallParticipantCreateOrConnectWithoutRoomInput[]
    createMany?: VideoCallParticipantCreateManyRoomInputEnvelope
    connect?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutVideoCallRoomsNestedInput = {
    create?: XOR<UsersCreateWithoutVideoCallRoomsInput, UsersUncheckedCreateWithoutVideoCallRoomsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVideoCallRoomsInput
    upsert?: UsersUpsertWithoutVideoCallRoomsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutVideoCallRoomsInput, UsersUpdateWithoutVideoCallRoomsInput>, UsersUncheckedUpdateWithoutVideoCallRoomsInput>
  }

  export type VideoCallParticipantUpdateManyWithoutRoomNestedInput = {
    create?: XOR<VideoCallParticipantCreateWithoutRoomInput, VideoCallParticipantUncheckedCreateWithoutRoomInput> | VideoCallParticipantCreateWithoutRoomInput[] | VideoCallParticipantUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: VideoCallParticipantCreateOrConnectWithoutRoomInput | VideoCallParticipantCreateOrConnectWithoutRoomInput[]
    upsert?: VideoCallParticipantUpsertWithWhereUniqueWithoutRoomInput | VideoCallParticipantUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: VideoCallParticipantCreateManyRoomInputEnvelope
    set?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
    disconnect?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
    delete?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
    connect?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
    update?: VideoCallParticipantUpdateWithWhereUniqueWithoutRoomInput | VideoCallParticipantUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: VideoCallParticipantUpdateManyWithWhereWithoutRoomInput | VideoCallParticipantUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: VideoCallParticipantScalarWhereInput | VideoCallParticipantScalarWhereInput[]
  }

  export type VideoCallParticipantUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<VideoCallParticipantCreateWithoutRoomInput, VideoCallParticipantUncheckedCreateWithoutRoomInput> | VideoCallParticipantCreateWithoutRoomInput[] | VideoCallParticipantUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: VideoCallParticipantCreateOrConnectWithoutRoomInput | VideoCallParticipantCreateOrConnectWithoutRoomInput[]
    upsert?: VideoCallParticipantUpsertWithWhereUniqueWithoutRoomInput | VideoCallParticipantUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: VideoCallParticipantCreateManyRoomInputEnvelope
    set?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
    disconnect?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
    delete?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
    connect?: VideoCallParticipantWhereUniqueInput | VideoCallParticipantWhereUniqueInput[]
    update?: VideoCallParticipantUpdateWithWhereUniqueWithoutRoomInput | VideoCallParticipantUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: VideoCallParticipantUpdateManyWithWhereWithoutRoomInput | VideoCallParticipantUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: VideoCallParticipantScalarWhereInput | VideoCallParticipantScalarWhereInput[]
  }

  export type VideoCallRoomCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<VideoCallRoomCreateWithoutParticipantsInput, VideoCallRoomUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: VideoCallRoomCreateOrConnectWithoutParticipantsInput
    connect?: VideoCallRoomWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutVideoCallParticipantsInput = {
    create?: XOR<UsersCreateWithoutVideoCallParticipantsInput, UsersUncheckedCreateWithoutVideoCallParticipantsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVideoCallParticipantsInput
    connect?: UsersWhereUniqueInput
  }

  export type VideoCallRoomUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<VideoCallRoomCreateWithoutParticipantsInput, VideoCallRoomUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: VideoCallRoomCreateOrConnectWithoutParticipantsInput
    upsert?: VideoCallRoomUpsertWithoutParticipantsInput
    connect?: VideoCallRoomWhereUniqueInput
    update?: XOR<XOR<VideoCallRoomUpdateToOneWithWhereWithoutParticipantsInput, VideoCallRoomUpdateWithoutParticipantsInput>, VideoCallRoomUncheckedUpdateWithoutParticipantsInput>
  }

  export type UsersUpdateOneRequiredWithoutVideoCallParticipantsNestedInput = {
    create?: XOR<UsersCreateWithoutVideoCallParticipantsInput, UsersUncheckedCreateWithoutVideoCallParticipantsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVideoCallParticipantsInput
    upsert?: UsersUpsertWithoutVideoCallParticipantsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutVideoCallParticipantsInput, UsersUpdateWithoutVideoCallParticipantsInput>, UsersUncheckedUpdateWithoutVideoCallParticipantsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumMessageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusFilter<$PrismaModel> | $Enums.MessageStatus
  }

  export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel> | $Enums.MessageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageStatusFilter<$PrismaModel>
    _max?: NestedEnumMessageStatusFilter<$PrismaModel>
  }

  export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumFileTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFileTypeNullableFilter<$PrismaModel> | $Enums.FileType | null
  }

  export type NestedEnumFileTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFileTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.FileType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFileTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumFileTypeNullableFilter<$PrismaModel>
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    status?: $Enums.MessageStatus
    message: string
    message_type: $Enums.MessageType
    created_at?: Date | string
    updated_at?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
    attachments?: AttachmentCreateNestedManyWithoutMessageInput
    readReceipts?: ReadReceiptCreateNestedManyWithoutMessageInput
    lastReadBy?: ConversationMemberCreateNestedManyWithoutLastReadMessageInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    conversation_id: string
    status?: $Enums.MessageStatus
    message: string
    message_type: $Enums.MessageType
    created_at?: Date | string
    updated_at?: Date | string
    attachments?: AttachmentUncheckedCreateNestedManyWithoutMessageInput
    readReceipts?: ReadReceiptUncheckedCreateNestedManyWithoutMessageInput
    lastReadBy?: ConversationMemberUncheckedCreateNestedManyWithoutLastReadMessageInput
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ConversationMemberCreateWithoutUserInput = {
    joined_at?: Date | string | null
    conversation: ConversationCreateNestedOneWithoutMembersInput
    lastReadMessage?: MessageCreateNestedOneWithoutLastReadByInput
  }

  export type ConversationMemberUncheckedCreateWithoutUserInput = {
    conversation_id: string
    joined_at?: Date | string | null
    last_read_message_id?: string | null
  }

  export type ConversationMemberCreateOrConnectWithoutUserInput = {
    where: ConversationMemberWhereUniqueInput
    create: XOR<ConversationMemberCreateWithoutUserInput, ConversationMemberUncheckedCreateWithoutUserInput>
  }

  export type ConversationMemberCreateManyUserInputEnvelope = {
    data: ConversationMemberCreateManyUserInput | ConversationMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReadReceiptCreateWithoutUserInput = {
    read_at?: Date | string | null
    message: MessageCreateNestedOneWithoutReadReceiptsInput
  }

  export type ReadReceiptUncheckedCreateWithoutUserInput = {
    message_id: string
    read_at?: Date | string | null
  }

  export type ReadReceiptCreateOrConnectWithoutUserInput = {
    where: ReadReceiptWhereUniqueInput
    create: XOR<ReadReceiptCreateWithoutUserInput, ReadReceiptUncheckedCreateWithoutUserInput>
  }

  export type ReadReceiptCreateManyUserInputEnvelope = {
    data: ReadReceiptCreateManyUserInput | ReadReceiptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TypingStatusCreateWithoutUserInput = {
    is_typing?: boolean
    updated_at?: Date | string | null
    conversation: ConversationCreateNestedOneWithoutTypingStatusInput
  }

  export type TypingStatusUncheckedCreateWithoutUserInput = {
    conversation_id: string
    is_typing?: boolean
    updated_at?: Date | string | null
  }

  export type TypingStatusCreateOrConnectWithoutUserInput = {
    where: TypingStatusWhereUniqueInput
    create: XOR<TypingStatusCreateWithoutUserInput, TypingStatusUncheckedCreateWithoutUserInput>
  }

  export type TypingStatusCreateManyUserInputEnvelope = {
    data: TypingStatusCreateManyUserInput | TypingStatusCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VideoCallRoomCreateWithoutHostInput = {
    id?: string
    room_code: string
    token: string
    created_at?: Date | string
    participants?: VideoCallParticipantCreateNestedManyWithoutRoomInput
  }

  export type VideoCallRoomUncheckedCreateWithoutHostInput = {
    id?: string
    room_code: string
    token: string
    created_at?: Date | string
    participants?: VideoCallParticipantUncheckedCreateNestedManyWithoutRoomInput
  }

  export type VideoCallRoomCreateOrConnectWithoutHostInput = {
    where: VideoCallRoomWhereUniqueInput
    create: XOR<VideoCallRoomCreateWithoutHostInput, VideoCallRoomUncheckedCreateWithoutHostInput>
  }

  export type VideoCallRoomCreateManyHostInputEnvelope = {
    data: VideoCallRoomCreateManyHostInput | VideoCallRoomCreateManyHostInput[]
    skipDuplicates?: boolean
  }

  export type VideoCallParticipantCreateWithoutUserInput = {
    id?: string
    joined_at?: Date | string
    left_at?: Date | string | null
    room: VideoCallRoomCreateNestedOneWithoutParticipantsInput
  }

  export type VideoCallParticipantUncheckedCreateWithoutUserInput = {
    id?: string
    room_id: string
    joined_at?: Date | string
    left_at?: Date | string | null
  }

  export type VideoCallParticipantCreateOrConnectWithoutUserInput = {
    where: VideoCallParticipantWhereUniqueInput
    create: XOR<VideoCallParticipantCreateWithoutUserInput, VideoCallParticipantUncheckedCreateWithoutUserInput>
  }

  export type VideoCallParticipantCreateManyUserInputEnvelope = {
    data: VideoCallParticipantCreateManyUserInput | VideoCallParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    conversation_id?: StringFilter<"Message"> | string
    sender_id?: StringFilter<"Message"> | string
    status?: EnumMessageStatusFilter<"Message"> | $Enums.MessageStatus
    message?: StringFilter<"Message"> | string
    message_type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    created_at?: DateTimeFilter<"Message"> | Date | string
    updated_at?: DateTimeFilter<"Message"> | Date | string
  }

  export type ConversationMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ConversationMemberWhereUniqueInput
    update: XOR<ConversationMemberUpdateWithoutUserInput, ConversationMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ConversationMemberCreateWithoutUserInput, ConversationMemberUncheckedCreateWithoutUserInput>
  }

  export type ConversationMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ConversationMemberWhereUniqueInput
    data: XOR<ConversationMemberUpdateWithoutUserInput, ConversationMemberUncheckedUpdateWithoutUserInput>
  }

  export type ConversationMemberUpdateManyWithWhereWithoutUserInput = {
    where: ConversationMemberScalarWhereInput
    data: XOR<ConversationMemberUpdateManyMutationInput, ConversationMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type ConversationMemberScalarWhereInput = {
    AND?: ConversationMemberScalarWhereInput | ConversationMemberScalarWhereInput[]
    OR?: ConversationMemberScalarWhereInput[]
    NOT?: ConversationMemberScalarWhereInput | ConversationMemberScalarWhereInput[]
    conversation_id?: StringFilter<"ConversationMember"> | string
    user_id?: StringFilter<"ConversationMember"> | string
    joined_at?: DateTimeNullableFilter<"ConversationMember"> | Date | string | null
    last_read_message_id?: StringNullableFilter<"ConversationMember"> | string | null
  }

  export type ReadReceiptUpsertWithWhereUniqueWithoutUserInput = {
    where: ReadReceiptWhereUniqueInput
    update: XOR<ReadReceiptUpdateWithoutUserInput, ReadReceiptUncheckedUpdateWithoutUserInput>
    create: XOR<ReadReceiptCreateWithoutUserInput, ReadReceiptUncheckedCreateWithoutUserInput>
  }

  export type ReadReceiptUpdateWithWhereUniqueWithoutUserInput = {
    where: ReadReceiptWhereUniqueInput
    data: XOR<ReadReceiptUpdateWithoutUserInput, ReadReceiptUncheckedUpdateWithoutUserInput>
  }

  export type ReadReceiptUpdateManyWithWhereWithoutUserInput = {
    where: ReadReceiptScalarWhereInput
    data: XOR<ReadReceiptUpdateManyMutationInput, ReadReceiptUncheckedUpdateManyWithoutUserInput>
  }

  export type ReadReceiptScalarWhereInput = {
    AND?: ReadReceiptScalarWhereInput | ReadReceiptScalarWhereInput[]
    OR?: ReadReceiptScalarWhereInput[]
    NOT?: ReadReceiptScalarWhereInput | ReadReceiptScalarWhereInput[]
    message_id?: StringFilter<"ReadReceipt"> | string
    user_id?: StringFilter<"ReadReceipt"> | string
    read_at?: DateTimeNullableFilter<"ReadReceipt"> | Date | string | null
  }

  export type TypingStatusUpsertWithWhereUniqueWithoutUserInput = {
    where: TypingStatusWhereUniqueInput
    update: XOR<TypingStatusUpdateWithoutUserInput, TypingStatusUncheckedUpdateWithoutUserInput>
    create: XOR<TypingStatusCreateWithoutUserInput, TypingStatusUncheckedCreateWithoutUserInput>
  }

  export type TypingStatusUpdateWithWhereUniqueWithoutUserInput = {
    where: TypingStatusWhereUniqueInput
    data: XOR<TypingStatusUpdateWithoutUserInput, TypingStatusUncheckedUpdateWithoutUserInput>
  }

  export type TypingStatusUpdateManyWithWhereWithoutUserInput = {
    where: TypingStatusScalarWhereInput
    data: XOR<TypingStatusUpdateManyMutationInput, TypingStatusUncheckedUpdateManyWithoutUserInput>
  }

  export type TypingStatusScalarWhereInput = {
    AND?: TypingStatusScalarWhereInput | TypingStatusScalarWhereInput[]
    OR?: TypingStatusScalarWhereInput[]
    NOT?: TypingStatusScalarWhereInput | TypingStatusScalarWhereInput[]
    conversation_id?: StringFilter<"TypingStatus"> | string
    user_id?: StringFilter<"TypingStatus"> | string
    is_typing?: BoolFilter<"TypingStatus"> | boolean
    updated_at?: DateTimeNullableFilter<"TypingStatus"> | Date | string | null
  }

  export type VideoCallRoomUpsertWithWhereUniqueWithoutHostInput = {
    where: VideoCallRoomWhereUniqueInput
    update: XOR<VideoCallRoomUpdateWithoutHostInput, VideoCallRoomUncheckedUpdateWithoutHostInput>
    create: XOR<VideoCallRoomCreateWithoutHostInput, VideoCallRoomUncheckedCreateWithoutHostInput>
  }

  export type VideoCallRoomUpdateWithWhereUniqueWithoutHostInput = {
    where: VideoCallRoomWhereUniqueInput
    data: XOR<VideoCallRoomUpdateWithoutHostInput, VideoCallRoomUncheckedUpdateWithoutHostInput>
  }

  export type VideoCallRoomUpdateManyWithWhereWithoutHostInput = {
    where: VideoCallRoomScalarWhereInput
    data: XOR<VideoCallRoomUpdateManyMutationInput, VideoCallRoomUncheckedUpdateManyWithoutHostInput>
  }

  export type VideoCallRoomScalarWhereInput = {
    AND?: VideoCallRoomScalarWhereInput | VideoCallRoomScalarWhereInput[]
    OR?: VideoCallRoomScalarWhereInput[]
    NOT?: VideoCallRoomScalarWhereInput | VideoCallRoomScalarWhereInput[]
    id?: StringFilter<"VideoCallRoom"> | string
    room_code?: StringFilter<"VideoCallRoom"> | string
    token?: StringFilter<"VideoCallRoom"> | string
    host_id?: StringFilter<"VideoCallRoom"> | string
    created_at?: DateTimeFilter<"VideoCallRoom"> | Date | string
  }

  export type VideoCallParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: VideoCallParticipantWhereUniqueInput
    update: XOR<VideoCallParticipantUpdateWithoutUserInput, VideoCallParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<VideoCallParticipantCreateWithoutUserInput, VideoCallParticipantUncheckedCreateWithoutUserInput>
  }

  export type VideoCallParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: VideoCallParticipantWhereUniqueInput
    data: XOR<VideoCallParticipantUpdateWithoutUserInput, VideoCallParticipantUncheckedUpdateWithoutUserInput>
  }

  export type VideoCallParticipantUpdateManyWithWhereWithoutUserInput = {
    where: VideoCallParticipantScalarWhereInput
    data: XOR<VideoCallParticipantUpdateManyMutationInput, VideoCallParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type VideoCallParticipantScalarWhereInput = {
    AND?: VideoCallParticipantScalarWhereInput | VideoCallParticipantScalarWhereInput[]
    OR?: VideoCallParticipantScalarWhereInput[]
    NOT?: VideoCallParticipantScalarWhereInput | VideoCallParticipantScalarWhereInput[]
    id?: StringFilter<"VideoCallParticipant"> | string
    room_id?: StringFilter<"VideoCallParticipant"> | string
    user_id?: StringFilter<"VideoCallParticipant"> | string
    joined_at?: DateTimeFilter<"VideoCallParticipant"> | Date | string
    left_at?: DateTimeNullableFilter<"VideoCallParticipant"> | Date | string | null
  }

  export type ConversationMemberCreateWithoutConversationInput = {
    joined_at?: Date | string | null
    user: UsersCreateNestedOneWithoutConversationMembersInput
    lastReadMessage?: MessageCreateNestedOneWithoutLastReadByInput
  }

  export type ConversationMemberUncheckedCreateWithoutConversationInput = {
    user_id: string
    joined_at?: Date | string | null
    last_read_message_id?: string | null
  }

  export type ConversationMemberCreateOrConnectWithoutConversationInput = {
    where: ConversationMemberWhereUniqueInput
    create: XOR<ConversationMemberCreateWithoutConversationInput, ConversationMemberUncheckedCreateWithoutConversationInput>
  }

  export type ConversationMemberCreateManyConversationInputEnvelope = {
    data: ConversationMemberCreateManyConversationInput | ConversationMemberCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutConversationInput = {
    id?: string
    status?: $Enums.MessageStatus
    message: string
    message_type: $Enums.MessageType
    created_at?: Date | string
    updated_at?: Date | string
    sender: UsersCreateNestedOneWithoutSentMessagesInput
    attachments?: AttachmentCreateNestedManyWithoutMessageInput
    readReceipts?: ReadReceiptCreateNestedManyWithoutMessageInput
    lastReadBy?: ConversationMemberCreateNestedManyWithoutLastReadMessageInput
  }

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: string
    sender_id: string
    status?: $Enums.MessageStatus
    message: string
    message_type: $Enums.MessageType
    created_at?: Date | string
    updated_at?: Date | string
    attachments?: AttachmentUncheckedCreateNestedManyWithoutMessageInput
    readReceipts?: ReadReceiptUncheckedCreateNestedManyWithoutMessageInput
    lastReadBy?: ConversationMemberUncheckedCreateNestedManyWithoutLastReadMessageInput
  }

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageCreateManyConversationInputEnvelope = {
    data: MessageCreateManyConversationInput | MessageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type TypingStatusCreateWithoutConversationInput = {
    is_typing?: boolean
    updated_at?: Date | string | null
    user: UsersCreateNestedOneWithoutTypingStatusesInput
  }

  export type TypingStatusUncheckedCreateWithoutConversationInput = {
    user_id: string
    is_typing?: boolean
    updated_at?: Date | string | null
  }

  export type TypingStatusCreateOrConnectWithoutConversationInput = {
    where: TypingStatusWhereUniqueInput
    create: XOR<TypingStatusCreateWithoutConversationInput, TypingStatusUncheckedCreateWithoutConversationInput>
  }

  export type TypingStatusCreateManyConversationInputEnvelope = {
    data: TypingStatusCreateManyConversationInput | TypingStatusCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type ConversationMemberUpsertWithWhereUniqueWithoutConversationInput = {
    where: ConversationMemberWhereUniqueInput
    update: XOR<ConversationMemberUpdateWithoutConversationInput, ConversationMemberUncheckedUpdateWithoutConversationInput>
    create: XOR<ConversationMemberCreateWithoutConversationInput, ConversationMemberUncheckedCreateWithoutConversationInput>
  }

  export type ConversationMemberUpdateWithWhereUniqueWithoutConversationInput = {
    where: ConversationMemberWhereUniqueInput
    data: XOR<ConversationMemberUpdateWithoutConversationInput, ConversationMemberUncheckedUpdateWithoutConversationInput>
  }

  export type ConversationMemberUpdateManyWithWhereWithoutConversationInput = {
    where: ConversationMemberScalarWhereInput
    data: XOR<ConversationMemberUpdateManyMutationInput, ConversationMemberUncheckedUpdateManyWithoutConversationInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type TypingStatusUpsertWithWhereUniqueWithoutConversationInput = {
    where: TypingStatusWhereUniqueInput
    update: XOR<TypingStatusUpdateWithoutConversationInput, TypingStatusUncheckedUpdateWithoutConversationInput>
    create: XOR<TypingStatusCreateWithoutConversationInput, TypingStatusUncheckedCreateWithoutConversationInput>
  }

  export type TypingStatusUpdateWithWhereUniqueWithoutConversationInput = {
    where: TypingStatusWhereUniqueInput
    data: XOR<TypingStatusUpdateWithoutConversationInput, TypingStatusUncheckedUpdateWithoutConversationInput>
  }

  export type TypingStatusUpdateManyWithWhereWithoutConversationInput = {
    where: TypingStatusScalarWhereInput
    data: XOR<TypingStatusUpdateManyMutationInput, TypingStatusUncheckedUpdateManyWithoutConversationInput>
  }

  export type ConversationCreateWithoutMembersInput = {
    id?: string
    is_group?: boolean
    name?: string | null
    created_by?: string | null
    created_at?: Date | string | null
    messages?: MessageCreateNestedManyWithoutConversationInput
    typingStatus?: TypingStatusCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutMembersInput = {
    id?: string
    is_group?: boolean
    name?: string | null
    created_by?: string | null
    created_at?: Date | string | null
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
    typingStatus?: TypingStatusUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutMembersInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMembersInput, ConversationUncheckedCreateWithoutMembersInput>
  }

  export type UsersCreateWithoutConversationMembersInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    readReceipts?: ReadReceiptCreateNestedManyWithoutUserInput
    typingStatuses?: TypingStatusCreateNestedManyWithoutUserInput
    videoCallRooms?: VideoCallRoomCreateNestedManyWithoutHostInput
    videoCallParticipants?: VideoCallParticipantCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutConversationMembersInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    readReceipts?: ReadReceiptUncheckedCreateNestedManyWithoutUserInput
    typingStatuses?: TypingStatusUncheckedCreateNestedManyWithoutUserInput
    videoCallRooms?: VideoCallRoomUncheckedCreateNestedManyWithoutHostInput
    videoCallParticipants?: VideoCallParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutConversationMembersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutConversationMembersInput, UsersUncheckedCreateWithoutConversationMembersInput>
  }

  export type MessageCreateWithoutLastReadByInput = {
    id?: string
    status?: $Enums.MessageStatus
    message: string
    message_type: $Enums.MessageType
    created_at?: Date | string
    updated_at?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
    sender: UsersCreateNestedOneWithoutSentMessagesInput
    attachments?: AttachmentCreateNestedManyWithoutMessageInput
    readReceipts?: ReadReceiptCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutLastReadByInput = {
    id?: string
    conversation_id: string
    sender_id: string
    status?: $Enums.MessageStatus
    message: string
    message_type: $Enums.MessageType
    created_at?: Date | string
    updated_at?: Date | string
    attachments?: AttachmentUncheckedCreateNestedManyWithoutMessageInput
    readReceipts?: ReadReceiptUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutLastReadByInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutLastReadByInput, MessageUncheckedCreateWithoutLastReadByInput>
  }

  export type ConversationUpsertWithoutMembersInput = {
    update: XOR<ConversationUpdateWithoutMembersInput, ConversationUncheckedUpdateWithoutMembersInput>
    create: XOR<ConversationCreateWithoutMembersInput, ConversationUncheckedCreateWithoutMembersInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMembersInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMembersInput, ConversationUncheckedUpdateWithoutMembersInput>
  }

  export type ConversationUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_group?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUpdateManyWithoutConversationNestedInput
    typingStatus?: TypingStatusUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_group?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
    typingStatus?: TypingStatusUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type UsersUpsertWithoutConversationMembersInput = {
    update: XOR<UsersUpdateWithoutConversationMembersInput, UsersUncheckedUpdateWithoutConversationMembersInput>
    create: XOR<UsersCreateWithoutConversationMembersInput, UsersUncheckedCreateWithoutConversationMembersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutConversationMembersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutConversationMembersInput, UsersUncheckedUpdateWithoutConversationMembersInput>
  }

  export type UsersUpdateWithoutConversationMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    readReceipts?: ReadReceiptUpdateManyWithoutUserNestedInput
    typingStatuses?: TypingStatusUpdateManyWithoutUserNestedInput
    videoCallRooms?: VideoCallRoomUpdateManyWithoutHostNestedInput
    videoCallParticipants?: VideoCallParticipantUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutConversationMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    readReceipts?: ReadReceiptUncheckedUpdateManyWithoutUserNestedInput
    typingStatuses?: TypingStatusUncheckedUpdateManyWithoutUserNestedInput
    videoCallRooms?: VideoCallRoomUncheckedUpdateManyWithoutHostNestedInput
    videoCallParticipants?: VideoCallParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageUpsertWithoutLastReadByInput = {
    update: XOR<MessageUpdateWithoutLastReadByInput, MessageUncheckedUpdateWithoutLastReadByInput>
    create: XOR<MessageCreateWithoutLastReadByInput, MessageUncheckedCreateWithoutLastReadByInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutLastReadByInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutLastReadByInput, MessageUncheckedUpdateWithoutLastReadByInput>
  }

  export type MessageUpdateWithoutLastReadByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UsersUpdateOneRequiredWithoutSentMessagesNestedInput
    attachments?: AttachmentUpdateManyWithoutMessageNestedInput
    readReceipts?: ReadReceiptUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutLastReadByInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversation_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentUncheckedUpdateManyWithoutMessageNestedInput
    readReceipts?: ReadReceiptUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type ConversationCreateWithoutMessagesInput = {
    id?: string
    is_group?: boolean
    name?: string | null
    created_by?: string | null
    created_at?: Date | string | null
    members?: ConversationMemberCreateNestedManyWithoutConversationInput
    typingStatus?: TypingStatusCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: string
    is_group?: boolean
    name?: string | null
    created_by?: string | null
    created_at?: Date | string | null
    members?: ConversationMemberUncheckedCreateNestedManyWithoutConversationInput
    typingStatus?: TypingStatusUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type UsersCreateWithoutSentMessagesInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    conversationMembers?: ConversationMemberCreateNestedManyWithoutUserInput
    readReceipts?: ReadReceiptCreateNestedManyWithoutUserInput
    typingStatuses?: TypingStatusCreateNestedManyWithoutUserInput
    videoCallRooms?: VideoCallRoomCreateNestedManyWithoutHostInput
    videoCallParticipants?: VideoCallParticipantCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    conversationMembers?: ConversationMemberUncheckedCreateNestedManyWithoutUserInput
    readReceipts?: ReadReceiptUncheckedCreateNestedManyWithoutUserInput
    typingStatuses?: TypingStatusUncheckedCreateNestedManyWithoutUserInput
    videoCallRooms?: VideoCallRoomUncheckedCreateNestedManyWithoutHostInput
    videoCallParticipants?: VideoCallParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutSentMessagesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSentMessagesInput, UsersUncheckedCreateWithoutSentMessagesInput>
  }

  export type AttachmentCreateWithoutMessageInput = {
    id?: string
    file_url: string
    file_type?: $Enums.FileType | null
    created_at?: Date | string | null
  }

  export type AttachmentUncheckedCreateWithoutMessageInput = {
    id?: string
    file_url: string
    file_type?: $Enums.FileType | null
    created_at?: Date | string | null
  }

  export type AttachmentCreateOrConnectWithoutMessageInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutMessageInput, AttachmentUncheckedCreateWithoutMessageInput>
  }

  export type AttachmentCreateManyMessageInputEnvelope = {
    data: AttachmentCreateManyMessageInput | AttachmentCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type ReadReceiptCreateWithoutMessageInput = {
    read_at?: Date | string | null
    user: UsersCreateNestedOneWithoutReadReceiptsInput
  }

  export type ReadReceiptUncheckedCreateWithoutMessageInput = {
    user_id: string
    read_at?: Date | string | null
  }

  export type ReadReceiptCreateOrConnectWithoutMessageInput = {
    where: ReadReceiptWhereUniqueInput
    create: XOR<ReadReceiptCreateWithoutMessageInput, ReadReceiptUncheckedCreateWithoutMessageInput>
  }

  export type ReadReceiptCreateManyMessageInputEnvelope = {
    data: ReadReceiptCreateManyMessageInput | ReadReceiptCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type ConversationMemberCreateWithoutLastReadMessageInput = {
    joined_at?: Date | string | null
    conversation: ConversationCreateNestedOneWithoutMembersInput
    user: UsersCreateNestedOneWithoutConversationMembersInput
  }

  export type ConversationMemberUncheckedCreateWithoutLastReadMessageInput = {
    conversation_id: string
    user_id: string
    joined_at?: Date | string | null
  }

  export type ConversationMemberCreateOrConnectWithoutLastReadMessageInput = {
    where: ConversationMemberWhereUniqueInput
    create: XOR<ConversationMemberCreateWithoutLastReadMessageInput, ConversationMemberUncheckedCreateWithoutLastReadMessageInput>
  }

  export type ConversationMemberCreateManyLastReadMessageInputEnvelope = {
    data: ConversationMemberCreateManyLastReadMessageInput | ConversationMemberCreateManyLastReadMessageInput[]
    skipDuplicates?: boolean
  }

  export type ConversationUpsertWithoutMessagesInput = {
    update: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_group?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: ConversationMemberUpdateManyWithoutConversationNestedInput
    typingStatus?: TypingStatusUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_group?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: ConversationMemberUncheckedUpdateManyWithoutConversationNestedInput
    typingStatus?: TypingStatusUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type UsersUpsertWithoutSentMessagesInput = {
    update: XOR<UsersUpdateWithoutSentMessagesInput, UsersUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UsersCreateWithoutSentMessagesInput, UsersUncheckedCreateWithoutSentMessagesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSentMessagesInput, UsersUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UsersUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    conversationMembers?: ConversationMemberUpdateManyWithoutUserNestedInput
    readReceipts?: ReadReceiptUpdateManyWithoutUserNestedInput
    typingStatuses?: TypingStatusUpdateManyWithoutUserNestedInput
    videoCallRooms?: VideoCallRoomUpdateManyWithoutHostNestedInput
    videoCallParticipants?: VideoCallParticipantUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    conversationMembers?: ConversationMemberUncheckedUpdateManyWithoutUserNestedInput
    readReceipts?: ReadReceiptUncheckedUpdateManyWithoutUserNestedInput
    typingStatuses?: TypingStatusUncheckedUpdateManyWithoutUserNestedInput
    videoCallRooms?: VideoCallRoomUncheckedUpdateManyWithoutHostNestedInput
    videoCallParticipants?: VideoCallParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AttachmentUpsertWithWhereUniqueWithoutMessageInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutMessageInput, AttachmentUncheckedUpdateWithoutMessageInput>
    create: XOR<AttachmentCreateWithoutMessageInput, AttachmentUncheckedCreateWithoutMessageInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutMessageInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutMessageInput, AttachmentUncheckedUpdateWithoutMessageInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutMessageInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutMessageInput>
  }

  export type AttachmentScalarWhereInput = {
    AND?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    OR?: AttachmentScalarWhereInput[]
    NOT?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    id?: StringFilter<"Attachment"> | string
    message_id?: StringNullableFilter<"Attachment"> | string | null
    file_url?: StringFilter<"Attachment"> | string
    file_type?: EnumFileTypeNullableFilter<"Attachment"> | $Enums.FileType | null
    created_at?: DateTimeNullableFilter<"Attachment"> | Date | string | null
  }

  export type ReadReceiptUpsertWithWhereUniqueWithoutMessageInput = {
    where: ReadReceiptWhereUniqueInput
    update: XOR<ReadReceiptUpdateWithoutMessageInput, ReadReceiptUncheckedUpdateWithoutMessageInput>
    create: XOR<ReadReceiptCreateWithoutMessageInput, ReadReceiptUncheckedCreateWithoutMessageInput>
  }

  export type ReadReceiptUpdateWithWhereUniqueWithoutMessageInput = {
    where: ReadReceiptWhereUniqueInput
    data: XOR<ReadReceiptUpdateWithoutMessageInput, ReadReceiptUncheckedUpdateWithoutMessageInput>
  }

  export type ReadReceiptUpdateManyWithWhereWithoutMessageInput = {
    where: ReadReceiptScalarWhereInput
    data: XOR<ReadReceiptUpdateManyMutationInput, ReadReceiptUncheckedUpdateManyWithoutMessageInput>
  }

  export type ConversationMemberUpsertWithWhereUniqueWithoutLastReadMessageInput = {
    where: ConversationMemberWhereUniqueInput
    update: XOR<ConversationMemberUpdateWithoutLastReadMessageInput, ConversationMemberUncheckedUpdateWithoutLastReadMessageInput>
    create: XOR<ConversationMemberCreateWithoutLastReadMessageInput, ConversationMemberUncheckedCreateWithoutLastReadMessageInput>
  }

  export type ConversationMemberUpdateWithWhereUniqueWithoutLastReadMessageInput = {
    where: ConversationMemberWhereUniqueInput
    data: XOR<ConversationMemberUpdateWithoutLastReadMessageInput, ConversationMemberUncheckedUpdateWithoutLastReadMessageInput>
  }

  export type ConversationMemberUpdateManyWithWhereWithoutLastReadMessageInput = {
    where: ConversationMemberScalarWhereInput
    data: XOR<ConversationMemberUpdateManyMutationInput, ConversationMemberUncheckedUpdateManyWithoutLastReadMessageInput>
  }

  export type MessageCreateWithoutAttachmentsInput = {
    id?: string
    status?: $Enums.MessageStatus
    message: string
    message_type: $Enums.MessageType
    created_at?: Date | string
    updated_at?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
    sender: UsersCreateNestedOneWithoutSentMessagesInput
    readReceipts?: ReadReceiptCreateNestedManyWithoutMessageInput
    lastReadBy?: ConversationMemberCreateNestedManyWithoutLastReadMessageInput
  }

  export type MessageUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    conversation_id: string
    sender_id: string
    status?: $Enums.MessageStatus
    message: string
    message_type: $Enums.MessageType
    created_at?: Date | string
    updated_at?: Date | string
    readReceipts?: ReadReceiptUncheckedCreateNestedManyWithoutMessageInput
    lastReadBy?: ConversationMemberUncheckedCreateNestedManyWithoutLastReadMessageInput
  }

  export type MessageCreateOrConnectWithoutAttachmentsInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutAttachmentsInput, MessageUncheckedCreateWithoutAttachmentsInput>
  }

  export type MessageUpsertWithoutAttachmentsInput = {
    update: XOR<MessageUpdateWithoutAttachmentsInput, MessageUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<MessageCreateWithoutAttachmentsInput, MessageUncheckedCreateWithoutAttachmentsInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutAttachmentsInput, MessageUncheckedUpdateWithoutAttachmentsInput>
  }

  export type MessageUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UsersUpdateOneRequiredWithoutSentMessagesNestedInput
    readReceipts?: ReadReceiptUpdateManyWithoutMessageNestedInput
    lastReadBy?: ConversationMemberUpdateManyWithoutLastReadMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversation_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    readReceipts?: ReadReceiptUncheckedUpdateManyWithoutMessageNestedInput
    lastReadBy?: ConversationMemberUncheckedUpdateManyWithoutLastReadMessageNestedInput
  }

  export type ConversationCreateWithoutTypingStatusInput = {
    id?: string
    is_group?: boolean
    name?: string | null
    created_by?: string | null
    created_at?: Date | string | null
    members?: ConversationMemberCreateNestedManyWithoutConversationInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutTypingStatusInput = {
    id?: string
    is_group?: boolean
    name?: string | null
    created_by?: string | null
    created_at?: Date | string | null
    members?: ConversationMemberUncheckedCreateNestedManyWithoutConversationInput
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutTypingStatusInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutTypingStatusInput, ConversationUncheckedCreateWithoutTypingStatusInput>
  }

  export type UsersCreateWithoutTypingStatusesInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    conversationMembers?: ConversationMemberCreateNestedManyWithoutUserInput
    readReceipts?: ReadReceiptCreateNestedManyWithoutUserInput
    videoCallRooms?: VideoCallRoomCreateNestedManyWithoutHostInput
    videoCallParticipants?: VideoCallParticipantCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutTypingStatusesInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    conversationMembers?: ConversationMemberUncheckedCreateNestedManyWithoutUserInput
    readReceipts?: ReadReceiptUncheckedCreateNestedManyWithoutUserInput
    videoCallRooms?: VideoCallRoomUncheckedCreateNestedManyWithoutHostInput
    videoCallParticipants?: VideoCallParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutTypingStatusesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTypingStatusesInput, UsersUncheckedCreateWithoutTypingStatusesInput>
  }

  export type ConversationUpsertWithoutTypingStatusInput = {
    update: XOR<ConversationUpdateWithoutTypingStatusInput, ConversationUncheckedUpdateWithoutTypingStatusInput>
    create: XOR<ConversationCreateWithoutTypingStatusInput, ConversationUncheckedCreateWithoutTypingStatusInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutTypingStatusInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutTypingStatusInput, ConversationUncheckedUpdateWithoutTypingStatusInput>
  }

  export type ConversationUpdateWithoutTypingStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_group?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: ConversationMemberUpdateManyWithoutConversationNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutTypingStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_group?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: ConversationMemberUncheckedUpdateManyWithoutConversationNestedInput
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type UsersUpsertWithoutTypingStatusesInput = {
    update: XOR<UsersUpdateWithoutTypingStatusesInput, UsersUncheckedUpdateWithoutTypingStatusesInput>
    create: XOR<UsersCreateWithoutTypingStatusesInput, UsersUncheckedCreateWithoutTypingStatusesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTypingStatusesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTypingStatusesInput, UsersUncheckedUpdateWithoutTypingStatusesInput>
  }

  export type UsersUpdateWithoutTypingStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    conversationMembers?: ConversationMemberUpdateManyWithoutUserNestedInput
    readReceipts?: ReadReceiptUpdateManyWithoutUserNestedInput
    videoCallRooms?: VideoCallRoomUpdateManyWithoutHostNestedInput
    videoCallParticipants?: VideoCallParticipantUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutTypingStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    conversationMembers?: ConversationMemberUncheckedUpdateManyWithoutUserNestedInput
    readReceipts?: ReadReceiptUncheckedUpdateManyWithoutUserNestedInput
    videoCallRooms?: VideoCallRoomUncheckedUpdateManyWithoutHostNestedInput
    videoCallParticipants?: VideoCallParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageCreateWithoutReadReceiptsInput = {
    id?: string
    status?: $Enums.MessageStatus
    message: string
    message_type: $Enums.MessageType
    created_at?: Date | string
    updated_at?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
    sender: UsersCreateNestedOneWithoutSentMessagesInput
    attachments?: AttachmentCreateNestedManyWithoutMessageInput
    lastReadBy?: ConversationMemberCreateNestedManyWithoutLastReadMessageInput
  }

  export type MessageUncheckedCreateWithoutReadReceiptsInput = {
    id?: string
    conversation_id: string
    sender_id: string
    status?: $Enums.MessageStatus
    message: string
    message_type: $Enums.MessageType
    created_at?: Date | string
    updated_at?: Date | string
    attachments?: AttachmentUncheckedCreateNestedManyWithoutMessageInput
    lastReadBy?: ConversationMemberUncheckedCreateNestedManyWithoutLastReadMessageInput
  }

  export type MessageCreateOrConnectWithoutReadReceiptsInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReadReceiptsInput, MessageUncheckedCreateWithoutReadReceiptsInput>
  }

  export type UsersCreateWithoutReadReceiptsInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    conversationMembers?: ConversationMemberCreateNestedManyWithoutUserInput
    typingStatuses?: TypingStatusCreateNestedManyWithoutUserInput
    videoCallRooms?: VideoCallRoomCreateNestedManyWithoutHostInput
    videoCallParticipants?: VideoCallParticipantCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutReadReceiptsInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    conversationMembers?: ConversationMemberUncheckedCreateNestedManyWithoutUserInput
    typingStatuses?: TypingStatusUncheckedCreateNestedManyWithoutUserInput
    videoCallRooms?: VideoCallRoomUncheckedCreateNestedManyWithoutHostInput
    videoCallParticipants?: VideoCallParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutReadReceiptsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutReadReceiptsInput, UsersUncheckedCreateWithoutReadReceiptsInput>
  }

  export type MessageUpsertWithoutReadReceiptsInput = {
    update: XOR<MessageUpdateWithoutReadReceiptsInput, MessageUncheckedUpdateWithoutReadReceiptsInput>
    create: XOR<MessageCreateWithoutReadReceiptsInput, MessageUncheckedCreateWithoutReadReceiptsInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutReadReceiptsInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutReadReceiptsInput, MessageUncheckedUpdateWithoutReadReceiptsInput>
  }

  export type MessageUpdateWithoutReadReceiptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UsersUpdateOneRequiredWithoutSentMessagesNestedInput
    attachments?: AttachmentUpdateManyWithoutMessageNestedInput
    lastReadBy?: ConversationMemberUpdateManyWithoutLastReadMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutReadReceiptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversation_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentUncheckedUpdateManyWithoutMessageNestedInput
    lastReadBy?: ConversationMemberUncheckedUpdateManyWithoutLastReadMessageNestedInput
  }

  export type UsersUpsertWithoutReadReceiptsInput = {
    update: XOR<UsersUpdateWithoutReadReceiptsInput, UsersUncheckedUpdateWithoutReadReceiptsInput>
    create: XOR<UsersCreateWithoutReadReceiptsInput, UsersUncheckedCreateWithoutReadReceiptsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutReadReceiptsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutReadReceiptsInput, UsersUncheckedUpdateWithoutReadReceiptsInput>
  }

  export type UsersUpdateWithoutReadReceiptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    conversationMembers?: ConversationMemberUpdateManyWithoutUserNestedInput
    typingStatuses?: TypingStatusUpdateManyWithoutUserNestedInput
    videoCallRooms?: VideoCallRoomUpdateManyWithoutHostNestedInput
    videoCallParticipants?: VideoCallParticipantUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutReadReceiptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    conversationMembers?: ConversationMemberUncheckedUpdateManyWithoutUserNestedInput
    typingStatuses?: TypingStatusUncheckedUpdateManyWithoutUserNestedInput
    videoCallRooms?: VideoCallRoomUncheckedUpdateManyWithoutHostNestedInput
    videoCallParticipants?: VideoCallParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutVideoCallRoomsInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    conversationMembers?: ConversationMemberCreateNestedManyWithoutUserInput
    readReceipts?: ReadReceiptCreateNestedManyWithoutUserInput
    typingStatuses?: TypingStatusCreateNestedManyWithoutUserInput
    videoCallParticipants?: VideoCallParticipantCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutVideoCallRoomsInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    conversationMembers?: ConversationMemberUncheckedCreateNestedManyWithoutUserInput
    readReceipts?: ReadReceiptUncheckedCreateNestedManyWithoutUserInput
    typingStatuses?: TypingStatusUncheckedCreateNestedManyWithoutUserInput
    videoCallParticipants?: VideoCallParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutVideoCallRoomsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutVideoCallRoomsInput, UsersUncheckedCreateWithoutVideoCallRoomsInput>
  }

  export type VideoCallParticipantCreateWithoutRoomInput = {
    id?: string
    joined_at?: Date | string
    left_at?: Date | string | null
    user: UsersCreateNestedOneWithoutVideoCallParticipantsInput
  }

  export type VideoCallParticipantUncheckedCreateWithoutRoomInput = {
    id?: string
    user_id: string
    joined_at?: Date | string
    left_at?: Date | string | null
  }

  export type VideoCallParticipantCreateOrConnectWithoutRoomInput = {
    where: VideoCallParticipantWhereUniqueInput
    create: XOR<VideoCallParticipantCreateWithoutRoomInput, VideoCallParticipantUncheckedCreateWithoutRoomInput>
  }

  export type VideoCallParticipantCreateManyRoomInputEnvelope = {
    data: VideoCallParticipantCreateManyRoomInput | VideoCallParticipantCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutVideoCallRoomsInput = {
    update: XOR<UsersUpdateWithoutVideoCallRoomsInput, UsersUncheckedUpdateWithoutVideoCallRoomsInput>
    create: XOR<UsersCreateWithoutVideoCallRoomsInput, UsersUncheckedCreateWithoutVideoCallRoomsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutVideoCallRoomsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutVideoCallRoomsInput, UsersUncheckedUpdateWithoutVideoCallRoomsInput>
  }

  export type UsersUpdateWithoutVideoCallRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    conversationMembers?: ConversationMemberUpdateManyWithoutUserNestedInput
    readReceipts?: ReadReceiptUpdateManyWithoutUserNestedInput
    typingStatuses?: TypingStatusUpdateManyWithoutUserNestedInput
    videoCallParticipants?: VideoCallParticipantUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutVideoCallRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    conversationMembers?: ConversationMemberUncheckedUpdateManyWithoutUserNestedInput
    readReceipts?: ReadReceiptUncheckedUpdateManyWithoutUserNestedInput
    typingStatuses?: TypingStatusUncheckedUpdateManyWithoutUserNestedInput
    videoCallParticipants?: VideoCallParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VideoCallParticipantUpsertWithWhereUniqueWithoutRoomInput = {
    where: VideoCallParticipantWhereUniqueInput
    update: XOR<VideoCallParticipantUpdateWithoutRoomInput, VideoCallParticipantUncheckedUpdateWithoutRoomInput>
    create: XOR<VideoCallParticipantCreateWithoutRoomInput, VideoCallParticipantUncheckedCreateWithoutRoomInput>
  }

  export type VideoCallParticipantUpdateWithWhereUniqueWithoutRoomInput = {
    where: VideoCallParticipantWhereUniqueInput
    data: XOR<VideoCallParticipantUpdateWithoutRoomInput, VideoCallParticipantUncheckedUpdateWithoutRoomInput>
  }

  export type VideoCallParticipantUpdateManyWithWhereWithoutRoomInput = {
    where: VideoCallParticipantScalarWhereInput
    data: XOR<VideoCallParticipantUpdateManyMutationInput, VideoCallParticipantUncheckedUpdateManyWithoutRoomInput>
  }

  export type VideoCallRoomCreateWithoutParticipantsInput = {
    id?: string
    room_code: string
    token: string
    created_at?: Date | string
    host: UsersCreateNestedOneWithoutVideoCallRoomsInput
  }

  export type VideoCallRoomUncheckedCreateWithoutParticipantsInput = {
    id?: string
    room_code: string
    token: string
    host_id: string
    created_at?: Date | string
  }

  export type VideoCallRoomCreateOrConnectWithoutParticipantsInput = {
    where: VideoCallRoomWhereUniqueInput
    create: XOR<VideoCallRoomCreateWithoutParticipantsInput, VideoCallRoomUncheckedCreateWithoutParticipantsInput>
  }

  export type UsersCreateWithoutVideoCallParticipantsInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    conversationMembers?: ConversationMemberCreateNestedManyWithoutUserInput
    readReceipts?: ReadReceiptCreateNestedManyWithoutUserInput
    typingStatuses?: TypingStatusCreateNestedManyWithoutUserInput
    videoCallRooms?: VideoCallRoomCreateNestedManyWithoutHostInput
  }

  export type UsersUncheckedCreateWithoutVideoCallParticipantsInput = {
    id?: string
    username: string
    fullname?: string | null
    avatarUrl?: string | null
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    conversationMembers?: ConversationMemberUncheckedCreateNestedManyWithoutUserInput
    readReceipts?: ReadReceiptUncheckedCreateNestedManyWithoutUserInput
    typingStatuses?: TypingStatusUncheckedCreateNestedManyWithoutUserInput
    videoCallRooms?: VideoCallRoomUncheckedCreateNestedManyWithoutHostInput
  }

  export type UsersCreateOrConnectWithoutVideoCallParticipantsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutVideoCallParticipantsInput, UsersUncheckedCreateWithoutVideoCallParticipantsInput>
  }

  export type VideoCallRoomUpsertWithoutParticipantsInput = {
    update: XOR<VideoCallRoomUpdateWithoutParticipantsInput, VideoCallRoomUncheckedUpdateWithoutParticipantsInput>
    create: XOR<VideoCallRoomCreateWithoutParticipantsInput, VideoCallRoomUncheckedCreateWithoutParticipantsInput>
    where?: VideoCallRoomWhereInput
  }

  export type VideoCallRoomUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: VideoCallRoomWhereInput
    data: XOR<VideoCallRoomUpdateWithoutParticipantsInput, VideoCallRoomUncheckedUpdateWithoutParticipantsInput>
  }

  export type VideoCallRoomUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_code?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UsersUpdateOneRequiredWithoutVideoCallRoomsNestedInput
  }

  export type VideoCallRoomUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_code?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    host_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUpsertWithoutVideoCallParticipantsInput = {
    update: XOR<UsersUpdateWithoutVideoCallParticipantsInput, UsersUncheckedUpdateWithoutVideoCallParticipantsInput>
    create: XOR<UsersCreateWithoutVideoCallParticipantsInput, UsersUncheckedCreateWithoutVideoCallParticipantsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutVideoCallParticipantsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutVideoCallParticipantsInput, UsersUncheckedUpdateWithoutVideoCallParticipantsInput>
  }

  export type UsersUpdateWithoutVideoCallParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    conversationMembers?: ConversationMemberUpdateManyWithoutUserNestedInput
    readReceipts?: ReadReceiptUpdateManyWithoutUserNestedInput
    typingStatuses?: TypingStatusUpdateManyWithoutUserNestedInput
    videoCallRooms?: VideoCallRoomUpdateManyWithoutHostNestedInput
  }

  export type UsersUncheckedUpdateWithoutVideoCallParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    conversationMembers?: ConversationMemberUncheckedUpdateManyWithoutUserNestedInput
    readReceipts?: ReadReceiptUncheckedUpdateManyWithoutUserNestedInput
    typingStatuses?: TypingStatusUncheckedUpdateManyWithoutUserNestedInput
    videoCallRooms?: VideoCallRoomUncheckedUpdateManyWithoutHostNestedInput
  }

  export type MessageCreateManySenderInput = {
    id?: string
    conversation_id: string
    status?: $Enums.MessageStatus
    message: string
    message_type: $Enums.MessageType
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConversationMemberCreateManyUserInput = {
    conversation_id: string
    joined_at?: Date | string | null
    last_read_message_id?: string | null
  }

  export type ReadReceiptCreateManyUserInput = {
    message_id: string
    read_at?: Date | string | null
  }

  export type TypingStatusCreateManyUserInput = {
    conversation_id: string
    is_typing?: boolean
    updated_at?: Date | string | null
  }

  export type VideoCallRoomCreateManyHostInput = {
    id?: string
    room_code: string
    token: string
    created_at?: Date | string
  }

  export type VideoCallParticipantCreateManyUserInput = {
    id?: string
    room_id: string
    joined_at?: Date | string
    left_at?: Date | string | null
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
    attachments?: AttachmentUpdateManyWithoutMessageNestedInput
    readReceipts?: ReadReceiptUpdateManyWithoutMessageNestedInput
    lastReadBy?: ConversationMemberUpdateManyWithoutLastReadMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversation_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentUncheckedUpdateManyWithoutMessageNestedInput
    readReceipts?: ReadReceiptUncheckedUpdateManyWithoutMessageNestedInput
    lastReadBy?: ConversationMemberUncheckedUpdateManyWithoutLastReadMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversation_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationMemberUpdateWithoutUserInput = {
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversation?: ConversationUpdateOneRequiredWithoutMembersNestedInput
    lastReadMessage?: MessageUpdateOneWithoutLastReadByNestedInput
  }

  export type ConversationMemberUncheckedUpdateWithoutUserInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_read_message_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationMemberUncheckedUpdateManyWithoutUserInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_read_message_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReadReceiptUpdateWithoutUserInput = {
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: MessageUpdateOneRequiredWithoutReadReceiptsNestedInput
  }

  export type ReadReceiptUncheckedUpdateWithoutUserInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReadReceiptUncheckedUpdateManyWithoutUserInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TypingStatusUpdateWithoutUserInput = {
    is_typing?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversation?: ConversationUpdateOneRequiredWithoutTypingStatusNestedInput
  }

  export type TypingStatusUncheckedUpdateWithoutUserInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    is_typing?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TypingStatusUncheckedUpdateManyWithoutUserInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    is_typing?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VideoCallRoomUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_code?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: VideoCallParticipantUpdateManyWithoutRoomNestedInput
  }

  export type VideoCallRoomUncheckedUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_code?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: VideoCallParticipantUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type VideoCallRoomUncheckedUpdateManyWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_code?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCallParticipantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: VideoCallRoomUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type VideoCallParticipantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VideoCallParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConversationMemberCreateManyConversationInput = {
    user_id: string
    joined_at?: Date | string | null
    last_read_message_id?: string | null
  }

  export type MessageCreateManyConversationInput = {
    id?: string
    sender_id: string
    status?: $Enums.MessageStatus
    message: string
    message_type: $Enums.MessageType
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TypingStatusCreateManyConversationInput = {
    user_id: string
    is_typing?: boolean
    updated_at?: Date | string | null
  }

  export type ConversationMemberUpdateWithoutConversationInput = {
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneRequiredWithoutConversationMembersNestedInput
    lastReadMessage?: MessageUpdateOneWithoutLastReadByNestedInput
  }

  export type ConversationMemberUncheckedUpdateWithoutConversationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_read_message_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationMemberUncheckedUpdateManyWithoutConversationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_read_message_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UsersUpdateOneRequiredWithoutSentMessagesNestedInput
    attachments?: AttachmentUpdateManyWithoutMessageNestedInput
    readReceipts?: ReadReceiptUpdateManyWithoutMessageNestedInput
    lastReadBy?: ConversationMemberUpdateManyWithoutLastReadMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentUncheckedUpdateManyWithoutMessageNestedInput
    readReceipts?: ReadReceiptUncheckedUpdateManyWithoutMessageNestedInput
    lastReadBy?: ConversationMemberUncheckedUpdateManyWithoutLastReadMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypingStatusUpdateWithoutConversationInput = {
    is_typing?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneRequiredWithoutTypingStatusesNestedInput
  }

  export type TypingStatusUncheckedUpdateWithoutConversationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    is_typing?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TypingStatusUncheckedUpdateManyWithoutConversationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    is_typing?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttachmentCreateManyMessageInput = {
    id?: string
    file_url: string
    file_type?: $Enums.FileType | null
    created_at?: Date | string | null
  }

  export type ReadReceiptCreateManyMessageInput = {
    user_id: string
    read_at?: Date | string | null
  }

  export type ConversationMemberCreateManyLastReadMessageInput = {
    conversation_id: string
    user_id: string
    joined_at?: Date | string | null
  }

  export type AttachmentUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttachmentUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttachmentUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: NullableEnumFileTypeFieldUpdateOperationsInput | $Enums.FileType | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReadReceiptUpdateWithoutMessageInput = {
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneRequiredWithoutReadReceiptsNestedInput
  }

  export type ReadReceiptUncheckedUpdateWithoutMessageInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReadReceiptUncheckedUpdateManyWithoutMessageInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConversationMemberUpdateWithoutLastReadMessageInput = {
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversation?: ConversationUpdateOneRequiredWithoutMembersNestedInput
    user?: UsersUpdateOneRequiredWithoutConversationMembersNestedInput
  }

  export type ConversationMemberUncheckedUpdateWithoutLastReadMessageInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConversationMemberUncheckedUpdateManyWithoutLastReadMessageInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VideoCallParticipantCreateManyRoomInput = {
    id?: string
    user_id: string
    joined_at?: Date | string
    left_at?: Date | string | null
  }

  export type VideoCallParticipantUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneRequiredWithoutVideoCallParticipantsNestedInput
  }

  export type VideoCallParticipantUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VideoCallParticipantUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}