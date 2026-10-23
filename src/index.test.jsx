import { render, fireEvent, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'

import Card from './components/Card'
import Banner from './components/Banner'
import Collapse from './components/Collapse'
import Slideshow from './components/Slideshow'

/* CARD */
describe('Card', () => {
  it('affiche le titre, la bonne image et le lien du logement', () => {
    render(
      <MemoryRouter>
        <Card
          id="123"
          title="Logement de test"
          cover="/image-test.jpg"
        />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', { name: 'Logement de test' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: 'Logement de test' })
    ).toHaveAttribute('src', '/image-test.jpg')

    expect(
      screen.getByRole('link', { name: /Logement de test/i })
    ).toHaveAttribute('href', '/housing/123')
  })
})

/* BANNER */
describe('Banner', () => {
  it('affiche la bonne image et le texte', () => {
    render(
      <Banner
        image="/banner-test.jpg"
        text="Chez vous, partout et ailleurs"
      />
    )

    expect(
      screen.getByRole('img', { name: 'Bannière' })
    ).toHaveAttribute('src', '/banner-test.jpg')

    expect(
      screen.getByRole('heading', {
        name: 'Chez vous, partout et ailleurs'
      })
    ).toBeInTheDocument()
  })

  it('affiche une bannière sans titre si aucun texte n’est fourni', () => {
    render(<Banner image="/banner-test.jpg" />)

    expect(
      screen.getByRole('img', { name: 'Bannière' })
    ).toBeInTheDocument()

    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })
})

/* COLLAPSE */
describe('Collapse', () => {
  it('ouvre et ferme le contenu au clic', () => {
    render(
      <Collapse
        title="Description"
        content="Voici la description du logement"
      />
    )

    const button = screen.getByRole('button', {
      name: 'Description'
    })

    const panel = document.getElementById(
      button.getAttribute('aria-controls')
    )

    // Le contenu reste dans le DOM pour permettre l’animation
    expect(
      screen.getByText('Voici la description du logement')
    ).toBeInTheDocument()

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(panel).toHaveAttribute('inert')

    fireEvent.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(panel).not.toHaveAttribute('inert')

    fireEvent.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(panel).toHaveAttribute('inert')
  })

  it('affiche une liste lorsque le contenu est un tableau', () => {
    render(
      <Collapse
        title="Équipements"
        content={['Wi-Fi', 'Cuisine']}
      />
    )

    fireEvent.click(
      screen.getByRole('button', { name: 'Équipements' })
    )

    expect(screen.getAllByRole('listitem')).toHaveLength(2)
    expect(screen.getByText('Wi-Fi')).toBeInTheDocument()
    expect(screen.getByText('Cuisine')).toBeInTheDocument()
  })

  it('affiche les enfants fournis en priorité', () => {
    render(
      <Collapse title="Description" content="Texte de secours">
        <p>Contenu personnalisé</p>
      </Collapse>
    )

    fireEvent.click(
      screen.getByRole('button', { name: 'Description' })
    )

    expect(screen.getByText('Contenu personnalisé')).toBeInTheDocument()
    expect(screen.queryByText('Texte de secours')).not.toBeInTheDocument()
  })
})

/* SLIDESHOW */
describe('Slideshow', () => {
  const pictures = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg'
  ]

  it('change de photo et met à jour le compteur', () => {
    render(<Slideshow pictures={pictures} />)

    const nextButton = screen.getByRole('button', {
      name: 'Image suivante'
    })

    const prevButton = screen.getByRole('button', {
      name: 'Image précédente'
    })

    expect(
      screen.getByRole('img', { name: 'Diapositive 1' })
    ).toHaveAttribute('src', '/image1.jpg')

    expect(screen.getByText('1/3')).toBeInTheDocument()

    fireEvent.click(nextButton)

    expect(
      screen.getByRole('img', { name: 'Diapositive 2' })
    ).toHaveAttribute('src', '/image2.jpg')

    expect(screen.getByText('2/3')).toBeInTheDocument()

    fireEvent.click(prevButton)

    expect(
      screen.getByRole('img', { name: 'Diapositive 1' })
    ).toHaveAttribute('src', '/image1.jpg')

    expect(screen.getByText('1/3')).toBeInTheDocument()
  })

  it('passe de la première à la dernière photo et inversement', () => {
    render(<Slideshow pictures={pictures} />)

    fireEvent.click(
      screen.getByRole('button', { name: 'Image précédente' })
    )

    expect(
      screen.getByRole('img', { name: 'Diapositive 3' })
    ).toHaveAttribute('src', '/image3.jpg')

    expect(screen.getByText('3/3')).toBeInTheDocument()

    fireEvent.click(
      screen.getByRole('button', { name: 'Image suivante' })
    )

    expect(
      screen.getByRole('img', { name: 'Diapositive 1' })
    ).toHaveAttribute('src', '/image1.jpg')

    expect(screen.getByText('1/3')).toBeInTheDocument()
  })

  it('masque la navigation lorsqu’il n’y a qu’une photo', () => {
    render(<Slideshow pictures={['/image1.jpg']} />)

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      '/image1.jpg'
    )

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.queryByText('1/1')).not.toBeInTheDocument()
  })

  it('n’affiche rien lorsque le tableau de photos est vide', () => {
    const { container } = render(<Slideshow pictures={[]} />)

    expect(container).toBeEmptyDOMElement()
  })

  it('n’affiche rien lorsque les photos ne sont pas fournies', () => {
    const { container } = render(<Slideshow />)

    expect(container).toBeEmptyDOMElement()
  })
})