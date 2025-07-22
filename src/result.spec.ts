import { assert, describe, expect, it } from "vitest";
import * as result from "./result";

describe('Ok', () => {
	describe('Create ok objects', () => {
		it('Should create with correct data', () => {
			const expectation = { foo: 'bar' }
			const ok = result.ok(expectation)

			assert(ok.status === 'ok')
			expect(ok.data).toBe(expectation)
		})
	})

	describe('Is ok', () => {
		it('Should return true for ok object', () => {
			const ok = result.ok({})

			expect(result.isOk(ok)).toBe(true)
		})

		it('Should return false for err object', () => {
			const ok = result.err({})

			expect(result.isOk(ok)).toBe(false)
		})
	})
})

describe('Err', () => {
	it('Should create an err object', () => {
		const expectation = { foo: 'bar' }
		const err = result.err(expectation)

		assert(err.status === 'err')
		expect(err.err).toBe(expectation)
	})


	describe('Is err', () => {
		it('Should return true for err object', () => {
			const err = result.err({})

			expect(result.isErr(err)).toBe(true)
		})

		it('Should return false for ok object', () => {
			const err = result.ok({})

			expect(result.isErr(err)).toBe(false)
		})
	})
})
