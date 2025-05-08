import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import AideSidebar from "@/components/aide-sidebar"
import Image from "next/image"

export default function Aide() {
  return (
    <div className="min-h-screen bg-[#0F172A] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-600/20 via-slate-900 to-[#0F172A] text-white">
      <Navbar />

      <div className="container mx-auto px-4 py-10 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 mt-10 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
          Aide et Documentation
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-slate-300">
          Tout ce que vous devez savoir pour jouer à Unistrabble
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de navigation */}
          <AideSidebar />

          {/* Contenu principal */}
          <div className="flex-1">
            {/* Introduction */}
            <section id="introduction" className="mb-16 scroll-mt-24">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-lg shadow-violet-700/10">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
                    1. Introduction
                  </h2>
                  <p className="text-slate-300 mb-4">
                    Bienvenue dans Unistrabble ! Cette adaptation fidèle du célèbre jeu de lettres vous permet de
                    profiter de l'expérience Scrabble complète, que ce soit en solo contre l'IA, en multijoueur local ou
                    en ligne contre d'autres joueurs. Ce document vous guidera à travers les règles du jeu et vous
                    expliquera comment jouer sur notre plateforme.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Installation et démarrage */}
            <section id="installation" className="mb-16 scroll-mt-24">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-lg shadow-violet-700/10">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
                    2. Installation et démarrage
                  </h2>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300">
                    <li className="pl-2">
                      <span className="font-semibold">Téléchargement :</span> Téléchargez le jeu depuis notre site web
                      ou votre plateforme de distribution préférée.
                    </li>
                    <li className="pl-2">
                      <span className="font-semibold">Installation :</span> Suivez les instructions d'installation
                      spécifiques à votre système d'exploitation.
                    </li>
                    <li className="pl-2">
                      <span className="font-semibold">Premier lancement :</span> Au premier lancement, vous serez invité
                      à créer un compte ou à jouer en tant qu'invité.
                    </li>
                    <li className="pl-2">
                      <span className="font-semibold">Mise à jour :</span> Le jeu se mettra à jour automatiquement
                      lorsque de nouvelles versions seront disponibles.
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </section>

            {/* Règles du jeu */}
            <section id="regles" className="mb-16 scroll-mt-24">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-lg shadow-violet-700/10">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
                    3. Règles du jeu
                  </h2>

                  {/* Objectif */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">3.1 Objectif</h3>
                    <p className="text-slate-300">
                      L'objectif du Scrabble est de marquer le plus de points possible en formant des mots sur le
                      plateau de jeu. Les points sont attribués en fonction de la valeur des lettres utilisées et des
                      cases spéciales sur lesquelles elles sont placées.
                    </p>
                  </div>

                  {/* Configuration */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">3.2 Configuration</h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-300">
                      <li className="pl-2">Le jeu se joue sur un plateau de 15×15 cases.</li>
                      <li className="pl-2">
                        Le sac contient 102 lettres, chacune ayant une valeur en points spécifique.
                      </li>
                      <li className="pl-2">Chaque joueur reçoit 7 lettres au début de la partie.</li>
                      <li className="pl-2">
                        Le premier joueur doit placer un mot qui passe par la case centrale du plateau.
                      </li>
                    </ul>
                  </div>

                  {/* Valeur des lettres */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">3.3 Valeur des lettres</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <p className="text-slate-300">
                          <span className="font-semibold">1 point :</span> A, E, I, L, N, O, R, S, T, U
                        </p>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <p className="text-slate-300">
                          <span className="font-semibold">2 points :</span> D, G, M
                        </p>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <p className="text-slate-300">
                          <span className="font-semibold">3 points :</span> B, C, P
                        </p>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <p className="text-slate-300">
                          <span className="font-semibold">4 points :</span> F, H, V
                        </p>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <p className="text-slate-300">
                          <span className="font-semibold">8 points :</span> J, Q
                        </p>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <p className="text-slate-300">
                          <span className="font-semibold">10 points :</span> K, W, X, Y, Z
                        </p>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded-lg col-span-1 md:col-span-2">
                        <p className="text-slate-300">
                          <span className="font-semibold">0 point :</span> Joker (peut représenter n'importe quelle
                          lettre)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Cases spéciales */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">3.4 Cases spéciales</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/30">
                        <p className="text-slate-300">
                          <span className="font-semibold text-blue-300">Double Lettre (DL) :</span> Double la valeur de
                          la lettre placée dessus.
                        </p>
                      </div>
                      <div className="bg-green-500/20 p-3 rounded-lg border border-green-500/30">
                        <p className="text-slate-300">
                          <span className="font-semibold text-green-300">Triple Lettre (TL) :</span> Triple la valeur de
                          la lettre placée dessus.
                        </p>
                      </div>
                      <div className="bg-pink-500/20 p-3 rounded-lg border border-pink-500/30">
                        <p className="text-slate-300">
                          <span className="font-semibold text-pink-300">Double Mot (DM) :</span> Double la valeur totale
                          du mot.
                        </p>
                      </div>
                      <div className="bg-red-500/20 p-3 rounded-lg border border-red-500/30">
                        <p className="text-slate-300">
                          <span className="font-semibold text-red-300">Triple Mot (TM) :</span> Triple la valeur totale
                          du mot.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tour de jeu */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">3.5 Tour de jeu</h3>
                    <p className="text-slate-300 mb-2">À son tour, un joueur peut :</p>
                    <ol className="list-decimal list-inside space-y-1 text-slate-300">
                      <li className="pl-2">Placer des lettres pour former un ou plusieurs nouveaux mots.</li>
                      <li className="pl-2">
                        Échanger certaines ou toutes ses lettres contre de nouvelles du sac (le joueur passe son tour).
                      </li>
                      <li className="pl-2">Passer son tour sans jouer ni échanger de lettres.</li>
                    </ol>
                  </div>

                  {/* Placement des lettres */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">3.6 Placement des lettres</h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-300">
                      <li className="pl-2">
                        Les lettres doivent être placées horizontalement (de gauche à droite) ou verticalement (de haut
                        en bas).
                      </li>
                      <li className="pl-2">
                        Les lettres nouvellement placées doivent former un mot principal continu.
                      </li>
                      <li className="pl-2">
                        Les lettres nouvellement placées peuvent également former des mots secondaires perpendiculaires
                        au mot principal.
                      </li>
                      <li className="pl-2">
                        Tous les mots formés doivent être présents dans le dictionnaire officiel.
                      </li>
                    </ul>
                  </div>

                  {/* Calcul des scores */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">3.7 Calcul des scores</h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-300">
                      <li className="pl-2">La valeur de base d'un mot est la somme des valeurs de ses lettres.</li>
                      <li className="pl-2">
                        Les multiplicateurs de lettres (DL, TL) s'appliquent d'abord à chaque lettre individuellement.
                      </li>
                      <li className="pl-2">
                        Les multiplicateurs de mots (DM, TM) s'appliquent ensuite et sont cumulatifs (deux DM =
                        quadruple).
                      </li>
                      <li className="pl-2">
                        Les cases spéciales ne s'appliquent que lorsqu'une nouvelle lettre est placée dessus.
                      </li>
                      <li className="pl-2">
                        Un "Scrabble" (utilisation des 7 lettres en un seul coup) rapporte un bonus de 50 points.
                      </li>
                    </ul>
                  </div>

                  {/* Fin de partie */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">3.8 Fin de partie</h3>
                    <p className="text-slate-300 mb-2">La partie se termine lorsque :</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-300 mb-4">
                      <li className="pl-2">Un joueur a placé toutes ses lettres et le sac est vide.</li>
                      <li className="pl-2">Tous les joueurs passent leur tour trois fois consécutivement.</li>
                      <li className="pl-2">Un joueur quitte la partie (en mode multijoueur).</li>
                    </ul>
                    <p className="text-slate-300">
                      En fin de partie, chaque joueur déduit de son score la valeur des lettres qui lui restent, et
                      cette valeur est ajoutée au score du joueur qui a terminé.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Interface de jeu */}
            <section id="interface" className="mb-16 scroll-mt-24">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-lg shadow-violet-700/10">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
                    4. Interface de jeu
                  </h2>
                  <p className="text-slate-300 mb-4">
                    L'interface de notre jeu de Scrabble comprend plusieurs éléments clés :
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h3 className="font-semibold text-violet-300 mb-2">1. Plateau de jeu</h3>
                      <p className="text-slate-300">Grille 15×15 avec cases colorées indiquant les bonus.</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h3 className="font-semibold text-violet-300 mb-2">2. Chevalet</h3>
                      <p className="text-slate-300">Zone contenant vos 7 lettres actuelles.</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h3 className="font-semibold text-violet-300 mb-2">3. Tableau des scores</h3>
                      <p className="text-slate-300">Affiche les scores de tous les joueurs.</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h3 className="font-semibold text-violet-300 mb-2">4. Historique des coups</h3>
                      <p className="text-slate-300">Liste des mots précédemment joués et leurs scores.</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h3 className="font-semibold text-violet-300 mb-2">5. Contrôles de jeu</h3>
                      <p className="text-slate-300">
                        Boutons pour valider un coup, échanger des lettres, passer ou contester.
                      </p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h3 className="font-semibold text-violet-300 mb-2">6. Indicateur de tour</h3>
                      <p className="text-slate-300">Montre quel joueur doit jouer.</p>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </section>

            {/* Comment jouer */}
            <section id="comment-jouer" className="mb-16 scroll-mt-24">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-lg shadow-violet-700/10">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
                    5. Comment jouer ?
                  </h2>

                  {/* Principes de base */}
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold mb-4 text-fuchsia-300">5.1 Principes de base</h3>

                    <div className="space-y-6">
                      <div className="bg-slate-700/30 p-4 rounded-lg border-l-4 border-violet-500">
                        <h4 className="font-semibold text-violet-300 mb-2">1. Commencer une partie</h4>
                        <ul className="list-disc list-inside space-y-1 text-slate-300">
                          <li className="pl-2">Depuis l'écran d'accueil, sélectionnez le mode de jeu souhaité.</li>
                          <li className="pl-2">Configurez les paramètres (nombre de joueurs, niveau de l'IA, etc.).</li>
                          <li className="pl-2">Lancez la partie.</li>
                        </ul>
                      </div>

                      <div className="bg-slate-700/30 p-4 rounded-lg border-l-4 border-violet-500">
                        <h4 className="font-semibold text-violet-300 mb-2">2. Jouer un coup</h4>
                        <ul className="list-disc list-inside space-y-1 text-slate-300">
                          <li className="pl-2">Attendez votre tour (indiqué par l'indicateur de tour).</li>
                          <li className="pl-2">Sélectionnez une lettre sur votre chevalet en cliquant dessus.</li>
                          <li className="pl-2">Faites glisser la lettres à l'endroit souhaité.</li>
                          <li className="pl-2">Continuez à placer des lettres pour former un mot complet.</li>
                          <li className="pl-2">Cliquez sur "Valider" pour confirmer votre coup.</li>
                        </ul>
                      </div>

                      <div className="bg-slate-700/30 p-4 rounded-lg border-l-4 border-violet-500">
                        <h4 className="font-semibold text-violet-300 mb-2">3. Utiliser un joker</h4>
                        <ul className="list-disc list-inside space-y-1 text-slate-300">
                          <li className="pl-2">Sélectionnez le joker dans votre chevalet.</li>
                          <li className="pl-2">Placez-le sur le plateau.</li>
                          <li className="pl-2">
                            Une fenêtre apparaîtra vous demandant quelle lettre le joker doit représenter.
                          </li>
                          <li className="pl-2">Sélectionnez la lettre souhaitée.</li>
                        </ul>
                      </div>

                      <div className="bg-slate-700/30 p-4 rounded-lg border-l-4 border-violet-500">
                        <h4 className="font-semibold text-violet-300 mb-2">4. Échanger des lettres</h4>
                        <ul className="list-disc list-inside space-y-1 text-slate-300">
                          <li className="pl-2">Cliquez sur le bouton "Échanger".</li>
                          <li className="pl-2">
                            Sélectionnez les lettres que vous souhaitez échanger sur votre chevalet.
                          </li>
                          <li className="pl-2">Confirmez l'échange en rappuyant sur la touche "Échanger".</li>
                        </ul>
                      </div>

                      <div className="bg-slate-700/30 p-4 rounded-lg border-l-4 border-violet-500">
                        <h4 className="font-semibold text-violet-300 mb-2">5. Passer son tour</h4>
                        <ul className="list-disc list-inside space-y-1 text-slate-300">
                          <li className="pl-2">Cliquez simplement sur le bouton "Passer".</li>
                        </ul>
                      </div>

                      <div className="bg-slate-700/30 p-4 rounded-lg border-l-4 border-violet-500">
                        <h4 className="font-semibold text-violet-300 mb-2">6. Contester un mot</h4>
                        <ul className="list-disc list-inside space-y-1 text-slate-300">
                          <li className="pl-2">
                            Si un adversaire joue un mot que vous pensez invalide, cliquez sur "Contester" avant le
                            prochain tour.
                          </li>
                          <li className="pl-2">
                            Si la contestation est justifiée, le mot sera retiré et le joueur perdra son tour.
                          </li>
                          <li className="pl-2">Si la contestation est injustifiée, vous perdrez des points.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Conseils tactiques */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-fuchsia-300">5.2 Conseils tactiques</h3>
                    <div className="bg-gradient-to-r from-violet-900/30 to-fuchsia-900/30 p-5 rounded-lg border border-violet-700/30">
                      <ul className="list-disc list-inside space-y-2 text-slate-300">
                        <li className="pl-2">
                          <span className="font-semibold text-fuchsia-300">
                            Utilisez les cases bonus stratégiquement :
                          </span>{" "}
                          Privilégiez les cases TM et DM pour maximiser vos scores.
                        </li>
                        <li className="pl-2">
                          <span className="font-semibold text-fuchsia-300">
                            Conservez un équilibre voyelles/consonnes
                          </span>{" "}
                          dans votre chevalet.
                        </li>
                        <li className="pl-2">
                          <span className="font-semibold text-fuchsia-300">Gardez les lettres à haute valeur</span> pour
                          des placements sur cases bonus.
                        </li>
                        <li className="pl-2">
                          <span className="font-semibold text-fuchsia-300">Faites attention aux ouvertures :</span>{" "}
                          Évitez de créer des opportunités faciles pour vos adversaires près des cases bonus.
                        </li>
                        <li className="pl-2">
                          <span className="font-semibold text-fuchsia-300">Apprenez les mots courts</span> avec les
                          lettres difficiles (J, Q, K, Y, Z) pour vous débloquer.
                        </li>
                        <li className="pl-2">
                          <span className="font-semibold text-fuchsia-300">En fin de partie,</span> essayez de vous
                          débarrasser des lettres à haute valeur pour minimiser les pénalités.
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Modes de jeu */}
            <section id="modes-de-jeu" className="mb-16 scroll-mt-24">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-lg shadow-violet-700/10">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
                    6. Modes de jeu
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Mode Solo */}
                    <div className="bg-slate-700/50 p-5 rounded-lg border border-slate-600/50 shadow-lg shadow-violet-700/5 hover:shadow-violet-700/10 transition-all duration-300 hover:translate-y-[-5px]">
                      <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">6.1 Mode Solo</h3>
                      <p className="text-slate-300 mb-3">Jouez contre une IA avec trois niveaux de difficulté :</p>
                      <ul className="list-disc list-inside space-y-1 text-slate-300">
                        <li className="pl-2">
                          <span className="font-semibold">Facile :</span> Idéal pour les débutants.
                        </li>
                        <li className="pl-2">
                          <span className="font-semibold">Moyen :</span> Un défi équilibré pour la plupart des joueurs.
                        </li>
                        <li className="pl-2">
                          <span className="font-semibold">Difficile :</span> Un adversaire redoutable pour les joueurs
                          expérimentés.
                        </li>
                      </ul>
                    </div>

                    {/* Multijoueur local */}
                    <div className="bg-slate-700/50 p-5 rounded-lg border border-slate-600/50 shadow-lg shadow-violet-700/5 hover:shadow-violet-700/10 transition-all duration-300 hover:translate-y-[-5px]">
                      <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">6.2 Multijoueur local</h3>
                      <p className="text-slate-300">
                        Jusqu'à 4 joueurs peuvent s'affronter sur le même appareil, en se passant l'appareil à chaque
                        tour.
                      </p>
                    </div>

                    {/* Multijoueur en ligne */}
                    <div className="bg-slate-700/50 p-5 rounded-lg border border-slate-600/50 shadow-lg shadow-violet-700/5 hover:shadow-violet-700/10 transition-all duration-300 hover:translate-y-[-5px]">
                      <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">6.3 Multijoueur en ligne</h3>
                      <ul className="list-disc list-inside space-y-1 text-slate-300">
                        <li className="pl-2">
                          <span className="font-semibold">Partie rapide :</span> Rejoignez automatiquement une partie
                          disponible.
                        </li>
                        <li className="pl-2">
                          <span className="font-semibold">Partie personnalisée :</span> Créez votre propre partie avec
                          des paramètres personnalisés.
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Fonctionnalités spéciales */}
            <section id="fonctionnalites" className="mb-16 scroll-mt-24">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-lg shadow-violet-700/10">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
                    7. Fonctionnalités spéciales
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Dictionnaire */}
                    <div className="bg-slate-700/50 p-5 rounded-lg border border-slate-600/50">
                      <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">7.1 Dictionnaire</h3>
                      <p className="text-slate-300">
                        Notre jeu utilise le dictionnaire officiel du Scrabble français. Vous pouvez consulter la
                        validité d'un mot à tout moment en utilisant la fonction "Vérifier un mot" dans le menu du jeu.
                      </p>
                    </div>

                    {/* Personnalisation */}
                    <div className="bg-slate-700/50 p-5 rounded-lg border border-slate-600/50">
                      <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">7.2 Personnalisation</h3>
                      <p className="text-slate-300">
                        Personnalisez votre expérience de jeu avec différents thèmes, sons et animations.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-slate-300 italic">Bon jeu à tous et à toutes !</p>
                    <p className="text-fuchsia-300 font-semibold mt-2">L'équipe Unistrabble</p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      <footer className="bg-slate-900/80 backdrop-blur-md py-6 text-center text-slate-400 mt-20 border-t border-slate-800">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Unistrabble - Projet étudiant de l'Université de Strasbourg</p>
        </div>
      </footer>
    </div>
  )
}
