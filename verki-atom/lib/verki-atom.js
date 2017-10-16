'use babel';

import VerkiAtomView from './verki-atom-view';
import { CompositeDisposable } from 'atom';

export default {

  verkiAtomView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.verkiAtomView = new VerkiAtomView(state.verkiAtomViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.verkiAtomView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'verki-atom:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.verkiAtomView.destroy();
  },

  serialize() {
    return {
      verkiAtomViewState: this.verkiAtomView.serialize()
    };
  },

  toggle() {
    console.log('VerkiAtom was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
