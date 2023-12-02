import assert from 'node:assert/strict';
import {lines} from '@jonahsnider/util';
import type {SolutionPair} from '../../lib/types.js';

type Color = 'red' | 'green' | 'blue';

export function day2(input: string): SolutionPair {
	const solution = {part1: 0, part2: 0} satisfies SolutionPair;

	const linesOfInput = lines(input);

	for (const line of linesOfInput) {
		const [, idWithColon, ...words] = line.split(' ');
		assert(idWithColon);
		const gameId = Number(idWithColon.slice(0, -':'.length));

		const matches = words
			.join(' ')
			.split(';')
			.map(game => game.split(', ').flatMap(x => x.trim().split(' ')));

		let redCount = 0;
		let greenCount = 0;
		let blueCount = 0;

		let minRed = -1;
		let minGreen = -1;
		let minBlue = -1;

		for (const match of matches) {
			for (let i = 0; i < match.length; i++) {
				const quantity = Number(match[i]);
				const colorWithComma = match[i + 1];
				const color = colorWithComma as Color;

				i++;

				switch (color) {
					case 'red': {
						if (quantity > redCount) {
							redCount = quantity;
						}

						if (quantity > minRed) {
							minRed = quantity;
						}

						break;
					}

					case 'green': {
						if (quantity > greenCount) {
							greenCount = quantity;
						}

						if (quantity > minGreen) {
							minGreen = quantity;
						}

						break;
					}

					case 'blue': {
						if (quantity > blueCount) {
							blueCount = quantity;
						}

						if (quantity > minBlue) {
							minBlue = quantity;
						}

						break;
					}
				}
			}

			console.log('minimums for game', gameId, {minRed, minGreen, minBlue});
		}

		if (redCount <= 12 && greenCount <= 13 && blueCount <= 14) {
			solution.part1 += gameId;
			console.log(`Game ${gameId} is valid`);
		} else {
			console.log(`Game ${gameId} is invalid`);
		}

		const power = redCount * greenCount * blueCount;

		solution.part2 += power;
	}

	return solution;
}
