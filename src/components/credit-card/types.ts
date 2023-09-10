export enum CardFace {
  BACK = 'BACK',
  FRONT = 'FRONT',
}

export interface BackFaceProps {
  /** card verification value (CVV) */
  cvv: string
}

export enum FrontFields {
  NAME = 'name',
  NUMBER = 'number',
  VALID_THRU = 'valid-thru',
}

export interface FrontFaceProps {
  /** which front face is visible */
  focus?: FrontFields
  /** card owner name */
  name: string
  /** card number */
  number: string
  /** valid thru date mm/yy */
  validThru: string
}
export interface CreditCardProps extends BackFaceProps, FrontFaceProps {
  /** which face of the card is visible */
  face: CardFace
}
