import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Card from './components/Card';
import Banner from './components/Banner';
import Collapse from './components/Collapse';
import Slideshow from './components/Slideshow';


/* --------------- TEST CARD ---------------- */

describe('Card', () => {
  it('affiche le titre et l’image du logement', () => {

    // Affichage du composant Card avec des données de test
    // MemoryRouter est nécessaire car Card contient un Link
    render(
      <MemoryRouter>
        <Card
          id="123"
          title="Logement de test"
          cover="/image-test.jpg"
        />
      </MemoryRouter>
    );

    // Vérifie que le titre du logement est affiché
    expect(
      screen.getByRole('heading', { name: 'Logement de test' })
    ).toBeInTheDocument();

    // Vérifie que l'image du logement est affichée
    expect(
      screen.getByRole('img', { name: 'Logement de test' })
    ).toBeInTheDocument();

    // Récupère le lien de la Card
    const link = screen.getByRole('link', {
      name: /Logement de test/i,
    });

    // Vérifie que le lien mène vers le bon logement
    expect(link).toHaveAttribute('href', '/housing/123');

    // Vérifie que la bonne image est utilisée
    expect(
      screen.getByRole('img', { name: 'Logement de test' })
    ).toHaveAttribute('src', '/image-test.jpg');
  });
});


/* ---------------- TEST BANNER ---------------- */

describe('Banner', () => {
  it('affiche l’image et le texte de la bannière', () => {

    // Affichage du composant Banner avec une image et un texte de test
    render(
      <Banner
        image="/banner-test.jpg"
        text="Chez vous, partout et ailleurs"
      />
    );

    // Vérifie que l'image de la bannière est affichée
    expect(
      screen.getByRole('img', { name: 'Bannière' })
    ).toBeInTheDocument();

    // Vérifie que la bonne image est utilisée
    expect(
      screen.getByRole('img', { name: 'Bannière' })
    ).toHaveAttribute('src', '/banner-test.jpg');

    // Vérifie que le texte de la bannière est affiché
    expect(
      screen.getByRole('heading', {
        name: 'Chez vous, partout et ailleurs',
      })
    ).toBeInTheDocument();
  });
});


/* ---------------- TEST COLLAPSE ---------------- */

describe('Collapse', () => {
  it('ouvre et ferme le contenu au clic', () => {

    // Affichage du Collapse avec un titre et un contenu de test
    render(
      <Collapse
        title="Description"
        content="Voici la description du logement"
      />
    );

    // Le contenu est fermé au départ
    expect(
      screen.queryByText('Voici la description du logement')
    ).not.toBeInTheDocument();

    // Récupère le titre du Collapse
    const title = screen.getByRole('heading', {
      name: 'Description',
    });

    // Simule un clic pour ouvrir le Collapse
    fireEvent.click(title.parentElement);

    // Vérifie que le contenu apparaît après le clic
    expect(
      screen.getByText('Voici la description du logement')
    ).toBeInTheDocument();

    // Simule un deuxième clic pour fermer le Collapse
    fireEvent.click(title.parentElement);

    // Vérifie que le contenu a de nouveau disparu
    expect(
      screen.queryByText('Voici la description du logement')
    ).not.toBeInTheDocument();
  });
});


/* ---------------- TEST SLIDESHOW ---------------- */

describe('Slideshow', () => {
  it('change d’image avec les boutons précédent et suivant', () => {

    // Création de trois images pour le test
    const pictures = [
      '/image1.jpg',
      '/image2.jpg',
      '/image3.jpg',
    ];

    // Affichage du Slideshow avec les images de test
    render(<Slideshow pictures={pictures} />);

    // Vérifie que la première image est affichée au départ
    expect(
      screen.getByRole('img', { name: 'Diapositive 1' })
    ).toHaveAttribute('src', '/image1.jpg');

    // Vérifie que le compteur commence à 1/3
    expect(screen.getByText('1/3')).toBeInTheDocument();

    // Simule un clic sur la flèche suivante
    fireEvent.click(screen.getByRole('button', { name: '❯' }));

    // Vérifie que la deuxième image est maintenant affichée
    expect(
      screen.getByRole('img', { name: 'Diapositive 2' })
    ).toHaveAttribute('src', '/image2.jpg');

    // Vérifie que le compteur est passé à 2/3
    expect(screen.getByText('2/3')).toBeInTheDocument();

    // Simule un clic sur la flèche précédente
    fireEvent.click(screen.getByRole('button', { name: '❮' }));

    // Vérifie que la première image est de nouveau affichée
    expect(
      screen.getByRole('img', { name: 'Diapositive 1' })
    ).toHaveAttribute('src', '/image1.jpg');

    // Vérifie que le compteur est revenu à 1/3
    expect(screen.getByText('1/3')).toBeInTheDocument();
  });
});