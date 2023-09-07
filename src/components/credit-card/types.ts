export enum CardFace {
  FRONT = 'FRONT',
  BACK = 'BACK',
}

export interface FrontFaceProps {
  /** card owner name */
  name: string
  /** card number */
  number: string
  /** valid thru date mm/yy */
  validThru: string
  /** which front face is visible */
  focus?: string
}

export interface BackFaceProps {
  /** card verification value (CVV) */
  cvv: string
}

export interface CreditCardProps extends FrontFaceProps, BackFaceProps {
  /** which face of the card is visible */
  face: CardFace
}
