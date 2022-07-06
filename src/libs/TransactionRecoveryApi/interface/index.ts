import { BigNumberish } from "ethers";

export interface AxelarResponse<T> {
  status: boolean;
  data: T;
  error: string | null;
}

export enum RetryErrorRecovery {
  REFETCH = "refetch",
  REBROADCAST = "rebroadcast",
  SKIP = "skip",
}

export interface AxelarRetryResponse<T> extends AxelarResponse<T> {
  retry?: RetryErrorRecovery;
}

export interface ConfirmDepositResponse {
  hash: string;
  chain: string;
  amount: BigNumberish;
  depositTxHash?: string | null;
  depositAddress: string;
  depositToken: string;
  height: number;
  commandId?: string;
}

export interface ConfirmDepositRequest {
  hash: string;
  from: string; //chain name
  depositAddress: string;
  denom: string; //asset common key
}
