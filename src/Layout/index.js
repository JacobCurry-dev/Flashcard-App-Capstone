import React, { useState } from "react";
import { Route, Switch, useParams, useHistory } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Display from "./Display";
import MakeDeck from "./MakeDeck";
import Study from './Study';
import ViewDeck from "./ViewDeck";

function Layout() {
  const [deck, setDeck] = useState({ name: "Loading...", cards: []});
  const { deckId } = useParams();
  const history = useHistory();

  return (
      <>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Display history={history} />
            </Route>
            <Route path='/decks/new'>
            <MakeDeck />
            </Route>
            <Route path={`/decks/:deckId/study`}>
              <Study deck={deck} setDeck={setDeck} />
            </Route>
            <Route path={'/decks/:deckId'}>
              <ViewDeck deck={deck} deckId={deckId} setDeck={setDeck} history={history} />
            </Route>
            <Route>
            <NotFound />
            </Route>
          </Switch>
        </div>
      </>
  );
}

export default Layout;
