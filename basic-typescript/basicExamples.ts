const greeting: string = 'Hello, Laracasts!';

const year: number = 200;

const addTwoNumbers = (a: number, b:number): number => a + b

function addTwoNumbersOld(a: number, b:number): number {
    return a + b;
}

interface User {
    id: string;
    name: string;
    age: number;
    email: string;
}

const getUserById = (id: string): User => ({
    id,
    name: 'test test',
    age: 29,
    email: '',
})

const user = getUserById('uuid-1');

const saveUser = (user: User) => console.log('saving user', {user})

saveUser(user);

// Arrays
const LaracastList: string[] = [
    'Jeffrey Way',
    'Tudor Adrian',
    'Andre Madarang'
];

const stringOrNumber: (string|number)[] = [1, 'text', 2, 'test 2'];

const tuple: [number, string] = [2023, 'Why?'];

// Literal types
const flipCoin = (): 'Head'|'Tail' => Math.random() < 0.5 ? 'Head' : 'Tail';
console.log(flipCoin());

enum Suit {
    HEAD,
    SPADES,
    DIAMONDS,
    CLUBS,
}

type SuitType = 'header' | 'spade' | 'diamonds' | 'clubs';

const suitMeaning = (suit: Suit) => {
    if (Suit.SPADES === suit) return 'Suit spades'
    if (Suit.HEAD === suit) return 'Suit head'
    if (Suit.DIAMONDS === suit) return 'Suit diamonds'
    if (Suit.CLUBS === suit) return 'Suit clubs'

    return ''
}

console.log(suitMeaning(Suit.CLUBS))

// void, null, undefined

const logger = (something: unknown): void => console.log(something);

interface UserV2 {
    id: string,
    age: number|null,
    email?: string
}

// any and unknown
type unknownType = { prop1: unknown, prop2: unknown }
const unknownFoo: unknownType = {
   prop1: 'hello',
   prop2: { foo: 'bar' }
}

if (
    unknownFoo.prop2
    && typeof unknownFoo.prop2 === 'object'
    && Object.hasOwnProperty.call(unknownFoo.prop2, 'foo')
) {
    console.log((unknownFoo.prop2 as {foo: unknown}).foo);
}

// Interfaces and Type Aliases
interface UserI {
    id: string;
    name: string;
}

type UserT = {
    id: string;
    name: string;
}

// never examples
const unreachableCaseError = (x: never): never => {
    throw Error(x)
}

interface UserCreatedEvent {
    eventType: 'USER_CREATED'
    parameters: {
        name: string,
    }
}

interface UserDeletedEvent {
    eventType: 'USER_DELETED'
    parameters: {
       id: string,
    }
}

type BetterUserEvent = UserCreatedEvent | UserDeletedEvent;

const handleEvenBetterUserEvent = (event: BetterUserEvent) => {
    if (event.eventType == 'USER_CREATED') {
        console.log(event.parameters.name);
        return;
    }

    if (event.eventType == 'USER_DELETED') {
        console.log(event.parameters.id);
        return;
    }

    unreachableCaseError(event);
}

// Intersection

interface Serialize {
    serialize(x: unknown): string
}

interface Identifiable {
    uuid: string
}

const something: Serialize & Identifiable = {
    uuid: 'uuid-1',
    serialize(x: unknown): string {
        return JSON.stringify(x)
    },
}

// iit is old way, below modern way
type Dictionary = {
    [key: string]: string
}

const dict: Dictionary = {
    foo: 'foo',
    baz: 'baz',
}

type OtherDictionary = Record<string, string>
type UnknownDictionary = Record<PropertyKey, unknown>


// Generics

interface Box<T> {
    contents: T
}

const boxOfStrings: Box<string[]> = {
    contents: ['hello', 'Laracasts!']
}

const boxOfString: Box<string> = {
    contents: 'hello'
}

const boxOfNumbers: Box<number[]> = {
    contents: [1, 2, 3, 4]
}

const identity = <T>(x: T): T => x
