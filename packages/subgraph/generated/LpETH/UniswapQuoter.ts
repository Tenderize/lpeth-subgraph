// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class UniswapQuoter extends ethereum.SmartContract {
  static bind(address: Address): UniswapQuoter {
    return new UniswapQuoter("UniswapQuoter", address);
  }

  quoteExactInput(path: Bytes, amountIn: BigInt): BigInt {
    let result = super.call(
      "quoteExactInput",
      "quoteExactInput(bytes,uint256):(uint256)",
      [
        ethereum.Value.fromBytes(path),
        ethereum.Value.fromUnsignedBigInt(amountIn),
      ],
    );

    return result[0].toBigInt();
  }

  try_quoteExactInput(
    path: Bytes,
    amountIn: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "quoteExactInput",
      "quoteExactInput(bytes,uint256):(uint256)",
      [
        ethereum.Value.fromBytes(path),
        ethereum.Value.fromUnsignedBigInt(amountIn),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  quoteExactInputSingle(
    tokenIn: Address,
    tokenOut: Address,
    fee: i32,
    amountIn: BigInt,
    sqrtPriceLimitX96: BigInt,
  ): BigInt {
    let result = super.call(
      "quoteExactInputSingle",
      "quoteExactInputSingle(address,address,uint24,uint256,uint160):(uint256)",
      [
        ethereum.Value.fromAddress(tokenIn),
        ethereum.Value.fromAddress(tokenOut),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee)),
        ethereum.Value.fromUnsignedBigInt(amountIn),
        ethereum.Value.fromUnsignedBigInt(sqrtPriceLimitX96),
      ],
    );

    return result[0].toBigInt();
  }

  try_quoteExactInputSingle(
    tokenIn: Address,
    tokenOut: Address,
    fee: i32,
    amountIn: BigInt,
    sqrtPriceLimitX96: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "quoteExactInputSingle",
      "quoteExactInputSingle(address,address,uint24,uint256,uint160):(uint256)",
      [
        ethereum.Value.fromAddress(tokenIn),
        ethereum.Value.fromAddress(tokenOut),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee)),
        ethereum.Value.fromUnsignedBigInt(amountIn),
        ethereum.Value.fromUnsignedBigInt(sqrtPriceLimitX96),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  quoteExactOutput(path: Bytes, amountOut: BigInt): BigInt {
    let result = super.call(
      "quoteExactOutput",
      "quoteExactOutput(bytes,uint256):(uint256)",
      [
        ethereum.Value.fromBytes(path),
        ethereum.Value.fromUnsignedBigInt(amountOut),
      ],
    );

    return result[0].toBigInt();
  }

  try_quoteExactOutput(
    path: Bytes,
    amountOut: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "quoteExactOutput",
      "quoteExactOutput(bytes,uint256):(uint256)",
      [
        ethereum.Value.fromBytes(path),
        ethereum.Value.fromUnsignedBigInt(amountOut),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  quoteExactOutputSingle(
    tokenIn: Address,
    tokenOut: Address,
    fee: i32,
    amountOut: BigInt,
    sqrtPriceLimitX96: BigInt,
  ): BigInt {
    let result = super.call(
      "quoteExactOutputSingle",
      "quoteExactOutputSingle(address,address,uint24,uint256,uint160):(uint256)",
      [
        ethereum.Value.fromAddress(tokenIn),
        ethereum.Value.fromAddress(tokenOut),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee)),
        ethereum.Value.fromUnsignedBigInt(amountOut),
        ethereum.Value.fromUnsignedBigInt(sqrtPriceLimitX96),
      ],
    );

    return result[0].toBigInt();
  }

  try_quoteExactOutputSingle(
    tokenIn: Address,
    tokenOut: Address,
    fee: i32,
    amountOut: BigInt,
    sqrtPriceLimitX96: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "quoteExactOutputSingle",
      "quoteExactOutputSingle(address,address,uint24,uint256,uint160):(uint256)",
      [
        ethereum.Value.fromAddress(tokenIn),
        ethereum.Value.fromAddress(tokenOut),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee)),
        ethereum.Value.fromUnsignedBigInt(amountOut),
        ethereum.Value.fromUnsignedBigInt(sqrtPriceLimitX96),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class QuoteExactInputCall extends ethereum.Call {
  get inputs(): QuoteExactInputCall__Inputs {
    return new QuoteExactInputCall__Inputs(this);
  }

  get outputs(): QuoteExactInputCall__Outputs {
    return new QuoteExactInputCall__Outputs(this);
  }
}

export class QuoteExactInputCall__Inputs {
  _call: QuoteExactInputCall;

  constructor(call: QuoteExactInputCall) {
    this._call = call;
  }

  get path(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get amountIn(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class QuoteExactInputCall__Outputs {
  _call: QuoteExactInputCall;

  constructor(call: QuoteExactInputCall) {
    this._call = call;
  }

  get amountOut(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class QuoteExactInputSingleCall extends ethereum.Call {
  get inputs(): QuoteExactInputSingleCall__Inputs {
    return new QuoteExactInputSingleCall__Inputs(this);
  }

  get outputs(): QuoteExactInputSingleCall__Outputs {
    return new QuoteExactInputSingleCall__Outputs(this);
  }
}

export class QuoteExactInputSingleCall__Inputs {
  _call: QuoteExactInputSingleCall;

  constructor(call: QuoteExactInputSingleCall) {
    this._call = call;
  }

  get tokenIn(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenOut(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get fee(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get amountIn(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get sqrtPriceLimitX96(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class QuoteExactInputSingleCall__Outputs {
  _call: QuoteExactInputSingleCall;

  constructor(call: QuoteExactInputSingleCall) {
    this._call = call;
  }

  get amountOut(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class QuoteExactOutputCall extends ethereum.Call {
  get inputs(): QuoteExactOutputCall__Inputs {
    return new QuoteExactOutputCall__Inputs(this);
  }

  get outputs(): QuoteExactOutputCall__Outputs {
    return new QuoteExactOutputCall__Outputs(this);
  }
}

export class QuoteExactOutputCall__Inputs {
  _call: QuoteExactOutputCall;

  constructor(call: QuoteExactOutputCall) {
    this._call = call;
  }

  get path(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get amountOut(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class QuoteExactOutputCall__Outputs {
  _call: QuoteExactOutputCall;

  constructor(call: QuoteExactOutputCall) {
    this._call = call;
  }

  get amountIn(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class QuoteExactOutputSingleCall extends ethereum.Call {
  get inputs(): QuoteExactOutputSingleCall__Inputs {
    return new QuoteExactOutputSingleCall__Inputs(this);
  }

  get outputs(): QuoteExactOutputSingleCall__Outputs {
    return new QuoteExactOutputSingleCall__Outputs(this);
  }
}

export class QuoteExactOutputSingleCall__Inputs {
  _call: QuoteExactOutputSingleCall;

  constructor(call: QuoteExactOutputSingleCall) {
    this._call = call;
  }

  get tokenIn(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenOut(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get fee(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get amountOut(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get sqrtPriceLimitX96(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class QuoteExactOutputSingleCall__Outputs {
  _call: QuoteExactOutputSingleCall;

  constructor(call: QuoteExactOutputSingleCall) {
    this._call = call;
  }

  get amountIn(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
