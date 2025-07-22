interface IOk<T> {
	readonly status: 'ok'
	data: T
}

interface IErr<T> {
	readonly status: 'err'
	err: T
}

type TResult<TOk, TErr> = IOk<TOk> | IErr<TErr>

const result = {
	ok: <T>(data: T): IOk<T> => {
		return {
			status: 'ok',
			data
		}
	},
	isOk: <TOk, TErr>(result: TResult<TOk, TErr>): result is IOk<TOk> => {
		return result.status === 'ok'
	},
	err: <T>(err: T): IErr<T> => {
		return {
			status: 'err',
			err
		}
	},
	isErr: <TOk, TErr>(result: TResult<TOk, TErr>): result is IErr<TErr> => {
		return result.status === 'err'
	},
}

export default result;
export {
	TResult
}
