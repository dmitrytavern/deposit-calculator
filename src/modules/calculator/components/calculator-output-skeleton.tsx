import { Divider, Skeleton, Spacer } from '@nextui-org/react'

export const CalculatorOutputSkeleton = () => {
  return (
    <div className="w-full">
      <Skeleton className="rounded-md max-w-36">
        <div className="h-6 rounded-md bg-default-300"></div>
      </Skeleton>

      <Spacer y={4} />

      <Skeleton className="rounded-md max-w-64">
        <div className="h-11 rounded-md bg-default-300"></div>
      </Skeleton>

      <Spacer y={4} />

      <Divider />

      <Spacer y={4} />

      <Skeleton className="rounded-md max-w-32">
        <div className="h-4 rounded-md bg-default-300"></div>
      </Skeleton>
      <Spacer y={1} />
      <Skeleton className="rounded-md max-w-44">
        <div className="h-8 rounded-md bg-default-300"></div>
      </Skeleton>

      <Spacer y={4} />

      <Skeleton className="rounded-md max-w-32">
        <div className="h-4 rounded-md bg-default-300"></div>
      </Skeleton>
      <Spacer y={1} />
      <Skeleton className="rounded-md max-w-44">
        <div className="h-8 rounded-md bg-default-300"></div>
      </Skeleton>

      <Spacer y={4} />

      <Skeleton className="rounded-md max-w-32">
        <div className="h-4 rounded-md bg-default-300"></div>
      </Skeleton>
      <Spacer y={1} />
      <Skeleton className="rounded-md max-w-44">
        <div className="h-8 rounded-md bg-default-300"></div>
      </Skeleton>
    </div>
  )
}
