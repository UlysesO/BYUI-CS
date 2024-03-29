/******************
 * File: money.h
 ******************/
#ifndef MONEY_H
#define MONEY_H

#include <cstdlib>
using namespace std;

class Money
{
private:
   int dollars;
   int cents;

public:
   void prompt();
   void display() const;
   int getDollars() const { return dollars; };
   int getCents() const { return cents; };
   void setDollars(int dollars) { this->dollars = abs(dollars); };
   void setCents(int cents) { this->cents = abs(cents); };

   //constructors
   Money() { setDollars(0); setCents(0); }
   Money(int dollars) { setDollars(dollars); setCents(0); }
   Money(int dollars, int cents) { setDollars(dollars); setCents(cents); }
};

#endif
