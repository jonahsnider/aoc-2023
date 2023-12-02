import {describe, assert, it, expect} from 'vitest';
import {getInput} from '../../utils/days.js';
import {day2} from './day2.js';

const actualInput = await getInput(2);
const sampleInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

describe('Day 2', () => {
	it('Part 1', () => {
		const {part1: solution} = day2(sampleInput);

		assert.strictEqual(solution, 8);
	});

	it('Part 2', () => {
		const {part2: solution} = day2(sampleInput);

		assert.strictEqual(solution, 2286);
	});

	it('Actual', async () => {
		const solution = day2(actualInput);

		expect(solution).toMatchInlineSnapshot(`
			{
			  "part1": 3035,
			  "part2": 66027,
			}
		`);
	});
});
