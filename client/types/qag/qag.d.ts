import Thematique from "~/client/types/thematique/thematique";

export default interface Qag{
  id: string,
	thematique: Thematique
	title: string,
	description: string,
	date: string,
	username: string,
	supportCount: string,

  response: { 
    author: string,
    authorDescription: string,
    authorPortraitUrl?: string, // TODO: à définir si besoin ou non
    responseDate: string,
    videoUrl: string,
    videoWidth: number,
    videoHeight: number,
    transcription: string,
    additionalInfo: { 
      title: string,
      description: string
    } | null,
    feedbackQuestion: string
  } | null
  textResponse: { 
    author: string,
    responseLabel: string,
    responseText: string, 
    feedbackQuestion: string, 
  } | null,
}