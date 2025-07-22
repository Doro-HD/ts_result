interface IOk<T> {
	readonly status: 'ok'
	data: T
}

interface IErr<T> {
	readonly status: 'err'
	err: T
}

type TResult<TOk, TErr> = IOk<TOk> | IErr<TErr>

/**
	* @description
	* Creates an ok object, used for storing data obtained from operations that can produce an err
	* @param data - The data to store inside of the object
*/
function ok<T>(data: T): IOk<T> {
	return {
		status: 'ok',
		data
	}
}

/**
 * @description
 * Checks if a result is of type Ok
*/
function isOk<TOk, TErr>(result: TResult<TOk, TErr>): result is IOk<TOk> {
	return result.status === 'ok'
}

/**
	* @description
	* Creates an err object, used for representing that the operation failed
	* @param err - The Error or a message, can be what type you want it to, should tell what went wrong
*/
function err<T>(err: T): IErr<T> {
	return {
		status: 'err',
		err
	}
}

/**
 * @description
 * Checks if a result is of type Err
*/
function isErr<TOk, TErr>(result: TResult<TOk, TErr>): result is IErr<TErr> {
	return result.status === 'err'
}

export {
	ok,
	isOk,
	err,
	isErr,
	TResult
}
