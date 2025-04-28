class Square:
    def __init__(self, a):
        self.a = a

    def get_perimeter(self):
        return 4 * self.a


if __name__ == "__main__":
    s1 = Square(10)
    s2 = Square(20)

    print(s1.get_perimeter())
    print(s2.get_perimeter())
