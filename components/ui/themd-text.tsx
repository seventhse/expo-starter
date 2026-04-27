import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { Text, TextProps } from 'react-native'

const themedTextVariants = cva('text-foreground', {
  variants: {
    variant: {
      largeTitle: 'text-4xl font-bold',
      title: 'text-2xl font-semibold',
      subtitle: 'text-lg font-medium text-secondary-foreground',
      body: 'text-lg',
      card: 'text-base text-card-foreground',
      caption: 'text-xs text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
})

type ThemedTextProps = TextProps & { variant?: VariantProps<typeof themedTextVariants>['variant'] }

export function ThemedText({ className, variant, ...restProp }: ThemedTextProps) {
  return <Text className={cn(themedTextVariants({ variant }), className)} {...restProp} />
}
