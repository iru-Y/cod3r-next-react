import Link from "next/link"

export default function Header (props) {
  console.log(props.titulo)
  return (
      <header>
        <Link href="/"  >
            Voltar
        </Link>
    </header>

  )

}
