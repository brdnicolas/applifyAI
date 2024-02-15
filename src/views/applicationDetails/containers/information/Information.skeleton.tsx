import { UploadInputSkeleton } from '@/components/molecules/uploadInput/UploadInput.skeleton'
import { InputSkeleton } from '@/components/atoms/input/Input.skeleton'

export const InformationContainerSkeleton = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between mt-13">
        <div className="w-1/2">
          <p className="text-4 text-gray-50 font-bold mb-6">Général</p>
          <div className="flex items-center gap-10">
            <InputSkeleton className="w-full" label="Entreprise" />
            <InputSkeleton className="w-full" label="Poste" />
          </div>
          <InputSkeleton className="w-full mt-6" label="Lien de l'offre" />
        </div>
        <div className="w-1/2 ml-30">
          <p className="text-4 text-gray-50 font-bold mb-6">Détails</p>
          <div className="flex items-center gap-10">
            <InputSkeleton className="w-full" label="Localisation" />
            <InputSkeleton className="w-full" label="Type de contrat" />
          </div>
        </div>
      </div>
      <div className="mt-13">
        <p className="text-4 text-gray-50 font-bold mb-6">Documents</p>
        <div className="grid grid-cols-8 gap-5">
          <UploadInputSkeleton />
          <UploadInputSkeleton />
        </div>
      </div>
    </div>
  )
}
