import { expect } from 'chai';

const add = (a: number, b: number): number => a + b;

describe('add function', () => {
    it('should add two numbers correctly', () => {
        expect(add(2, 3)).to.equal(5);
    });

    // Additional test cases can be added here
});
