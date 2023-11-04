export interface TTransaction {
  id: number;
  /** Date when agreement was made */
  agreement_date: Date;
  /** items, currency */
  payment_to_huntsman: string[];
  /** id of the hunstman @see THuntsMan */
  huntsman_id: number;
}

export const storedTransactions: Readonly<TTransaction[]> = [
  {
    id: 1,
    agreement_date: new Date("2023-05-01T02:44:40Z"),
    payment_to_huntsman: ["5kg veiseliha"],
    huntsman_id: 9,
  },
  {
    id: 2,
    agreement_date: new Date("2023-03-28T10:25:35Z"),
    payment_to_huntsman: ["20€", "veiseliha"],
    huntsman_id: 6,
  },
  {
    id: 3,
    agreement_date: new Date("2023-05-01T01:34:44Z"),
    payment_to_huntsman: ["kana"],
    huntsman_id: 7,
  },
  {
    id: 4,
    agreement_date: new Date("2023-09-11T23:06:13Z"),
    payment_to_huntsman: ["20kg kana"],
    huntsman_id: 8,
  },
  {
    id: 5,
    agreement_date: new Date("2023-08-16T14:42:09Z"),
    payment_to_huntsman: ["25kg hakkliha"],
    huntsman_id: 3,
  },
  {
    id: 6,
    agreement_date: new Date("2023-04-15T13:37:08Z"),
    payment_to_huntsman: ["lambaliha"],
    huntsman_id: 8,
  },
  {
    id: 7,
    agreement_date: new Date("2023-10-11T05:58:58Z"),
    payment_to_huntsman: ["hakkliha"],
    huntsman_id: 2,
  },
  {
    id: 8,
    agreement_date: new Date("2023-02-01T14:06:25Z"),
    payment_to_huntsman: ["hakkliha"],
    huntsman_id: 0,
  },
  {
    id: 9,
    agreement_date: new Date("2022-11-04T11:22:37Z"),
    payment_to_huntsman: ["kana"],
    huntsman_id: 7,
  },
  {
    id: 10,
    agreement_date: new Date("2023-09-25T03:13:08Z"),
    payment_to_huntsman: ["veiseliha"],
    huntsman_id: 3,
  },
  {
    id: 11,
    agreement_date: new Date("2022-12-05T05:06:41Z"),
    payment_to_huntsman: ["hakkliha"],
    huntsman_id: 4,
  },
  {
    id: 12,
    agreement_date: new Date("2023-02-04T00:55:35Z"),
    payment_to_huntsman: ["hakkliha"],
    huntsman_id: 5,
  },
  {
    id: 13,
    agreement_date: new Date("2023-03-08T09:20:03Z"),
    payment_to_huntsman: ["hakkliha"],
    huntsman_id: 8,
  },
  {
    id: 14,
    agreement_date: new Date("2022-11-27T04:14:02Z"),
    payment_to_huntsman: ["veiseliha"],
    huntsman_id: 7,
  },
  {
    id: 15,
    agreement_date: new Date("2023-01-11T06:09:51Z"),
    payment_to_huntsman: ["sealiha"],
    huntsman_id: 6,
  },
  {
    id: 16,
    agreement_date: new Date("2022-12-28T04:47:45Z"),
    payment_to_huntsman: ["hakkliha"],
    huntsman_id: 8,
  },
  {
    id: 17,
    agreement_date: new Date("2023-09-22T01:33:03Z"),
    payment_to_huntsman: ["kana"],
    huntsman_id: 7,
  },
  {
    id: 18,
    agreement_date: new Date("2023-01-19T00:21:17Z"),
    payment_to_huntsman: ["hakkliha"],
    huntsman_id: 3,
  },
  {
    id: 19,
    agreement_date: new Date("2023-05-01T15:58:56Z"),
    payment_to_huntsman: ["lambaliha"],
    huntsman_id: 0,
  },
  {
    id: 20,
    agreement_date: new Date("2023-07-25T18:31:00Z"),
    payment_to_huntsman: ["kana"],
    huntsman_id: 5,
  },
  {
    id: 21,
    agreement_date: new Date("2022-12-17T15:37:51Z"),
    payment_to_huntsman: ["hakkliha"],
    huntsman_id: 9,
  },
  {
    id: 22,
    agreement_date: new Date("2023-08-13T02:16:12Z"),
    payment_to_huntsman: ["lambaliha"],
    huntsman_id: 9,
  },
  {
    id: 23,
    agreement_date: new Date("2023-08-09T21:16:03Z"),
    payment_to_huntsman: ["veiseliha"],
    huntsman_id: 6,
  },
  {
    id: 24,
    agreement_date: new Date("2023-06-12T21:41:16Z"),
    payment_to_huntsman: ["lambaliha"],
    huntsman_id: 9,
  },
  {
    id: 25,
    agreement_date: new Date("2023-01-12T16:27:51Z"),
    payment_to_huntsman: ["sealiha"],
    huntsman_id: 4,
  },
];
