import React from 'react'
interface PageProps {
	params: {
		slug: string
	}
}
export default function PageDetail({ params }: PageProps) {
	console.log(params);
  return (
	<div>PageDetail</div>
  )
}
